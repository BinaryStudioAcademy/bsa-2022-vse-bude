import React, { FC } from 'react';
import { useTranslation } from '~/hooks/hooks';
import { View } from '~/components/components';
import { formaTotDateTime, getSellerTimeZone } from '~/helpers/helpers';
import { ProductDto } from '@vse-bude/shared';
import { RenderDescriptionInfo } from './renderDescriptionInfo';

const Description: FC<Partial<ProductDto>> = ({
  description,
  city,
  status,
  endDate,
}) => {
  const { t } = useTranslation();
  const date = formaTotDateTime(endDate as Date);
  const timeZone = getSellerTimeZone(endDate as Date);

  return (
    <View>
      <RenderDescriptionInfo
        title={t('screens:product_info.ENDING_ON')}
        description={date || ''}
      />
      <RenderDescriptionInfo
        title={t('screens:product_info.TIME_ZONE')}
        description={`GMT ${timeZone}`}
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
