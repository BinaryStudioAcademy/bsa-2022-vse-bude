import { getEnv, productUrl } from '@helpers';
import { defaultEmailOptions } from '@types';
import { lang } from '@lang';
import type { Product, User } from '@prisma/client';
import { MailBuilder } from './mail-builder';

export class ProductSoldAuthorBuilder extends MailBuilder {
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

  buildText(author: User, product: Product): string {
    let text = `${lang('email:words.hello')}, ${author.firstName} ${
      author.lastName
    }!\n`;
    text += `${lang('email:text.successAuctionAuthor')}\n`;
    text += `${lang('email:words.link')}: ${productUrl(product.id)}\n`;

    return text;
  }
}
