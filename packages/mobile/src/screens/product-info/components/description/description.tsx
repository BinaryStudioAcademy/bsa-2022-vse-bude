import React, { FC } from 'react';
import { ItemDto } from '@vse-bude/shared';
import { useTranslation } from '~/hooks/hooks';
import { formatToDateTime, getTimezoneOffset } from '~/helpers/helpers';
import { View } from '~/components/components';
import { RenderDescriptionInfo } from './render-description-info';

type DescriptionProps = {
  product: ItemDto;
  auction: boolean;
};

const Description: FC<DescriptionProps> = ({ product, auction }) => {
  const { t } = useTranslation();
  const { endDate, condition, city, country, description } = product;
  const date = formatToDateTime(endDate);
  const timeZone = getTimezoneOffset(endDate);

  return (
    <View>
      {auction && (
        <RenderDescriptionInfo
          title={t('screens:product_info.ENDING_ON')}
          description={date}
        />
      )}
      {auction && (
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
