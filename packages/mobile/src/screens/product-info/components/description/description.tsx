import React, { FC } from 'react';
import { useTranslation } from '~/hooks/hooks';
import { View } from '~/components/components';
import { RenderDescriptionInfo } from './render-description-info';

type DescriptionProps = {
  description: string;
  city: string;
  status: string;
  date: string;
  timeZone?: number;
};

const Description: FC<DescriptionProps> = ({
  description,
  city,
  status,
  date,
  timeZone,
}) => {
  const { t } = useTranslation();

  return (
    <View>
      <RenderDescriptionInfo
        title={t('screens:product_info.ENDING_ON')}
        description={date || ''}
      />
      <RenderDescriptionInfo
        title={t('screens:product_info.TIME_ZONE')}
        description={`GMT ${timeZone || '+0'}`}
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
