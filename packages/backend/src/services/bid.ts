import type {
  BidRepository,
  NotificationRepository,
  ProductRepository,
} from '@repositories';
import type { CreateBidDto } from '@types';
import { AuctionEndedError, ProductNotFoundError } from '@errors';
import { toUtc } from '@helpers';
import { UPDATE_PRODUCT_PRICE, NotificationType } from '@vse-bude/shared';
import type { Bid } from '@prisma/client';
import { lang } from '@lang';
import { LowBidPriceError } from '../error/product/low-bid-price-error';
import { eventListener } from '../events';

export class BidService {
  private _bidRepository: BidRepository;

  private _productRepository: ProductRepository;

  private _notificationRepository: NotificationRepository;

  constructor(
    bidRepository: BidRepository,
    productRepository: ProductRepository,
    notificationRepository: NotificationRepository,
  ) {
    this._bidRepository = bidRepository;
    this._productRepository = productRepository;
    this._notificationRepository = notificationRepository;
  }

  public async createBid(dto: CreateBidDto): Promise<Bid> {
    const product = await this._productRepository.getById(dto.productId);

    if (!product) {
      throw new ProductNotFoundError();
    }

    if (toUtc(product.endDate) < toUtc()) {
      throw new AuctionEndedError();
    }

    const lastBid = product.bids[product.bids.length - 1];

    const currentPrice = await this._productRepository.getCurrentPrice(
      dto.productId,
    );

    if (+product.minimalBid + +currentPrice > dto.price) {
      throw new LowBidPriceError();
    }

    const [bid] = await this._bidRepository.create(dto);

    eventListener.emit(UPDATE_PRODUCT_PRICE, {
      productId: product.id,
      price: bid.price,
      bidderId: bid.bidderId,
    });

    await this._notificationRepository.createNotification({
      type: NotificationType.BID_PLACED,
      userId: product.authorId,
      title: lang('notifications:title.BID_PLACED', {}, 'en'),
      description: lang('notifications:description.BID_PLACED', {}, 'en'),
      productId: product.id,
    });

    if (lastBid && lastBid.bidderId !== bid.bidderId) {
      await this._notificationRepository.createNotification({
        type: NotificationType.OUTBID,
        userId: lastBid.bidderId,
        title: lang('notifications:title.OUTBID', {}, 'en'),
        description: lang('notifications:description.OUTBID', {}, 'en'),
        productId: product.id,
      });
    }

    return bid;
  }
}
