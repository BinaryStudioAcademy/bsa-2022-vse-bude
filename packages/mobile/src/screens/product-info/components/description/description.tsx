import React, { FC } from 'react';
import { ProductDto, ProductType } from '@vse-bude/shared';
import { useTranslation } from '~/hooks/hooks';
import { formatToDateTime, getTimezoneOffset } from '~/helpers/helpers';
import { View } from '~/components/components';
import { RenderDescriptionInfo } from './render-description-info';

type DescriptionProps = {
  product: ProductDto;
};

const Description: FC<DescriptionProps> = ({ product }) => {
  const { t } = useTranslation();
  const { endDate, condition, city, country, description, type } = product;
  const date = formatToDateTime(endDate);
  const timeZone = getTimezoneOffset(endDate);
  const isAuction = type == ProductType.AUCTION;

  return (
    <View>
      {isAuction && (
        <RenderDescriptionInfo
          title={t('screens:product_info.ENDING_ON')}
          description={date}
        />
      )}
      {isAuction && (
        <RenderDescriptionInfo
          title={t('screens:product_info.TIME_ZONE')}
          description={`GMT ${timeZone}`}
        />
      )}
      <RenderDescriptionInfo
        title={t('screens:product_info.STATUS')}
        description={condition}
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
