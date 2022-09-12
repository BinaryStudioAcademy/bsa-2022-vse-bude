import { getEnv, productUrl } from '@helpers';
import { defaultEmailOptions } from '@types';
import { lang } from '@lang';
import type { Product, User } from '@prisma/client';
import { MailBuilder } from './mail-builder';

export class ProductSoldWinnerBuilder extends MailBuilder {
  protected setOptions(): void {
    this._options = {
      ...this._options,
      ...defaultEmailOptions,
      subject: `${lang('email:subject.auction')} | ${getEnv('APP_NAME')}`,
    };
  }

  setText(text: string): this {
    return super.setText(text);
  }

  buildText(user: User, product: Product): string {
    let text = `${lang('email:words.hello')}, ${user.firstName} ${
      user.lastName
    }!\n`;
    text += `${lang('email:text.successAuctionWinner')}\n`;
    text += `${lang('email:words.link')}: ${productUrl(product.id)}\n`;

    return text;
  }
}
