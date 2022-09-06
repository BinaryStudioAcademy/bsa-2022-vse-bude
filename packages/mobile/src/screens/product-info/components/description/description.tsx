import React from 'react';
import { useTranslation } from '~/hooks/hooks';
import { formatToDateTime } from '~/helpers/helpers';
import { View } from '~/components/components';
import { ProductDto } from '@vse-bude/shared';
import { RenderDescriptionInfo } from './render-description-info';

const Description = ({ product }: { product: ProductDto }) => {
  const { t } = useTranslation();
  const { endDate, status, city, description } = product;
  const date = formatToDateTime(endDate);

  return (
    <View>
      <RenderDescriptionInfo
        title={t('screens:product_info.ENDING_ON')}
        description={date || ''}
      />
      <RenderDescriptionInfo
        title={t('screens:product_info.TIME_ZONE')}
        description="GMT +0"
      />
      <RenderDescriptionInfo
        title={t('screens:product_info.STATUS')}
        description={status || ''}
      />
      <RenderDescriptionInfo
        title={t('screens:product_info.LOCATION')}
        description={city || ''}
      />
      <RenderDescriptionInfo
        title={t('screens:product_info.DESCRIPTION')}
        description={description || ''}
      />
    </View>
  );
};

export { Description };
