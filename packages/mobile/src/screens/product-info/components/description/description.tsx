import React, { FC } from 'react';
import { Condition, ProductDto, ProductType } from '@vse-bude/shared';
import { useTranslation } from '~/hooks/hooks';
import { formatToDateTime } from '~/helpers/helpers';
import { View } from '~/components/components';
import { RenderDescriptionInfo } from './render-description-info';

type DescriptionProps = {
  product: ProductDto;
};

const Description: FC<DescriptionProps> = ({ product }) => {
  const { t } = useTranslation();
  const { endDate, condition, city, country, description, type } = product;
  const date = formatToDateTime(endDate);
  const isAuction = type == ProductType.AUCTION;
  const isNew = condition === Condition.NEW;

  return (
    <View>
      {isAuction && (
        <RenderDescriptionInfo
          title={t('screens:product_info.ENDING_ON')}
          description={date}
        />
      )}
      <RenderDescriptionInfo
        title={t('screens:product_info.STATUS')}
        description={isNew ? t('product_info.NEW') : t('product_info.USED')}
      />
      <RenderDescriptionInfo
        title={t('screens:product_info.LOCATION')}
        description={`${country}, ${city ?? ''}`}
      />
      <RenderDescriptionInfo
        title={t('screens:product_info.DESCRIPTION')}
        description={description}
      />
    </View>
  );
};

export { Description };
