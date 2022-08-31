import React, { FC } from 'react';
import { DotSvg } from '~/assets/svg/dot';
import { Text, View } from '~/components/components';
import { useCustomTheme, useTranslation } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const Description: FC = () => {
  const { colors } = useCustomTheme();
  const { t } = useTranslation();

  return (
    <View>
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
            {t('screens:product_info.ENDING_ON')}
          </Text>
        </View>
        <Text
          style={[
            globalStyles.fs14,
            styles.description,
            { color: colors.text },
          ]}
        >
          28.09.2022, 12:00 pm
        </Text>
      </View>
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
            {t('screens:product_info.TIME_ZONE')}
          </Text>
        </View>
        <Text
          style={[
            globalStyles.fs14,
            styles.description,
            { color: colors.text },
          ]}
        >
          GMT +3
        </Text>
      </View>
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
            {t('screens:product_info.STATUS')}
          </Text>
        </View>
        <Text
          style={[
            globalStyles.fs14,
            styles.description,
            { color: colors.text },
          ]}
        >
          used
        </Text>
      </View>
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
            {t('screens:product_info.LOCATION')}
          </Text>
        </View>
        <Text
          style={[
            globalStyles.fs14,
            styles.description,
            { color: colors.text },
          ]}
        >
          Ukraine, Kyiv
        </Text>
      </View>
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
            {t('screens:product_info.DESCRIPTION')}
          </Text>
        </View>
        <Text
          style={[
            globalStyles.fs14,
            styles.description,
            { color: colors.text },
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut
          eleifend nunc in eleifend malesuada mauris ornare. Amet sagittis vitae
          a, lorem et nunc eros. Diam, amet, imperdiet in egestas enim fusce.
        </Text>
      </View>
    </View>
  );
};

export { Description };
