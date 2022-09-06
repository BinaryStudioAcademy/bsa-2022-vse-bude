import type { BidRepository } from '@repositories';
import type { CreateBidDto } from '@types';
import type { ProductRepository } from '@repositories';
import { AuctionEndedError, ProductNotFoundError } from '@errors';
import { toUtc } from '@helpers';
import { LowBidPriceError } from '../error/product/low-bid-price-error';

export class BidService {
  private _bidRepository: BidRepository;

  private _productRepository: ProductRepository;

  constructor(
    bidRepository: BidRepository,
    productRepository: ProductRepository,
  ) {
    this._bidRepository = bidRepository;
    this._productRepository = productRepository;
  }

  public async createBid(dto: CreateBidDto) {
    const product = await this._productRepository.getById(dto.productId);

    if (!product) {
      throw new ProductNotFoundError();
    }

    if (toUtc(product.endDate) < toUtc()) {
      throw new AuctionEndedError();
    }

    const currentPrice = await this._productRepository.getCurrentPrice(
      dto.productId,
    );

    if (+product.minimalBid + +currentPrice > dto.price) {
      throw new LowBidPriceError();
    }

    const [bid] = await this._bidRepository.create(dto);

    return bid;
  }
}
