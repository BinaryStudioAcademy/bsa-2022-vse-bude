import { ColorPalette } from '@vse-bude/shared';
import React, { FC } from 'react';
import {
  PlusIcon,
  PrimaryButton,
  StarIcon,
  Text,
  View,
} from '~/components/components';
import { useCustomTheme } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const LotPriceBlock: FC = () => {
  const { colors } = useCustomTheme();

  return (
    <>
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.justifyContentCenter,
          globalStyles.alignItemsCenter,
          styles.currentBid,
          { backgroundColor: colors.backgroundSecondary },
        ]}
      >
        <Text
          style={[
            globalStyles.mr3,
            globalStyles.fs12,
            { color: colors.subtitle },
          ]}
        >
          Current bid
        </Text>
        <Text
          style={[
            globalStyles.ml3,
            globalStyles.fs22,
            globalStyles.fontWeightExtraBold,
            { color: colors.titleSecondary },
          ]}
        >
          UAH 5800
        </Text>
      </View>
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.justifyContentSpaceBetween,
          globalStyles.alignItemsCenter,
          globalStyles.px6,
          globalStyles.py4,
          styles.footer,
        ]}
      >
        <Text style={styles.minBid}>Min UAH 200</Text>
        <View
          style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}
        >
          <View style={styles.btnWidth}>
            <PlusIcon
              size={12}
              color={ColorPalette.WHITE_100}
              style={styles.btnIcon}
            />
            <PrimaryButton label="Bid" />
          </View>
          <View style={[globalStyles.ml5, styles.iconBorder]}>
            <StarIcon
              size={25}
              color={ColorPalette.YELLOW_200}
              style={styles.icon}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export { LotPriceBlock };
