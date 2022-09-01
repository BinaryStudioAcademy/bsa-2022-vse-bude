import { ProductDto } from '@vse-bude/shared';
import React, { FC } from 'react';
import { DotSvg } from '~/assets/svg/dot';
import { Text, View } from '~/components/components';
import { useCustomTheme, useTranslation } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const Description: FC<Partial<ProductDto>> = ({
  description,
  city,
  status,
  endDate,
}) => {
  const { colors } = useCustomTheme();
  const { t } = useTranslation();

  const date = endDate
    ?.toISOString()
    .split('T')[0]
    .split('-')
    .reverse()
    .join('.');
  const renderInfo = (title: string, description: string) => {
    return (
      <View style={[globalStyles.flexDirectionRow, globalStyles.py2]}>
        <View
          style={[
            styles.title,
            globalStyles.flexDirectionRow,
            globalStyles.alignItemsCenter,
          ]}
        >
          <DotSvg />
          <Text
            style={[
              globalStyles.fs14,
              styles.titleText,
              { color: colors.subtitle },
            ]}
          >
            {title}
          </Text>
        </View>
        <Text
          style={[
            globalStyles.fs14,
            styles.description,
            { color: colors.text },
          ]}
        >
          {description}
        </Text>
      </View>
    );
  };

  return (
    <View>
      {renderInfo(t('screens:product_info.ENDING_ON'), date || '')}
      {renderInfo(t('screens:product_info.TIME_ZONE'), 'GMT-3')}
      {renderInfo(t('screens:product_info.STATUS'), status || '')}
      {renderInfo(t('screens:product_info.LOCATION'), city || '')}
      {renderInfo(t('screens:product_info.DESCRIPTION'), description || '')}
    </View>
  );
};

export { Description };
