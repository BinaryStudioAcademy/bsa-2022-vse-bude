import React, { FC } from 'react';
import { globalStyles } from '~/styles/styles';
import { ColorPalette } from '@vse-bude/shared';
import { MOCK_IMAGES } from '~/mock/mock-images';
import { useTranslation } from 'react-i18next';
import {
  Text,
  View,
  Image,
  Pressable,
  FacebookIcon,
  PhoneIcon,
  InstagramIcon,
  GlobeIcon,
} from '../components';
import { styles } from './styles';

const SellerInfo: FC = () => {
  const { t } = useTranslation();

  return (
    <View
      style={[
        styles.wrapper,
        globalStyles.ml4,
        globalStyles.mr4,
        globalStyles.px6,
        globalStyles.py6,
      ]}
    >
      <View
        style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}
      >
        <Text
          style={[
            globalStyles.fontWeightExtraBold,
            globalStyles.fs16,
            styles.title,
          ]}
        >
          {t('screens:words.SELLER')}
        </Text>
        <View style={styles.info}>
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.alignItemsCenter,
            ]}
          >
            <Image style={styles.avatar} source={MOCK_IMAGES.JYSK} />
            <Text
              style={[
                globalStyles.px4,
                globalStyles.fontWeightBold,
                globalStyles.fs14,
              ]}
            >
              Jysk.UA
            </Text>
          </View>
        </View>
      </View>
      <View style={[globalStyles.flexDirectionRow, globalStyles.mt6]}>
        <Text
          style={[
            globalStyles.fontWeightExtraBold,
            globalStyles.fs16,
            styles.title,
          ]}
        >
          {t('screens:words.CONTACT')}
        </Text>
        <View style={[globalStyles.ml2, styles.info]}>
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.alignItemsCenter,
            ]}
          >
            <PhoneIcon size={15} color={ColorPalette.YELLOW_200} />
            <Text
              style={[
                globalStyles.px3,
                globalStyles.fs14,
                globalStyles.fontWeightMedium,
              ]}
            >
              +3809999999
            </Text>
          </View>
          <Pressable
            style={[
              globalStyles.alignItemsCenter,
              globalStyles.flexDirectionRow,
              globalStyles.mt4,
            ]}
          >
            <FacebookIcon size={15} color={ColorPalette.YELLOW_200} />
            <Text
              style={[
                globalStyles.px3,
                globalStyles.fs14,
                globalStyles.fontWeightMedium,
              ]}
              color={ColorPalette.YELLOW_200}
            >
              jysk_ua
            </Text>
          </Pressable>
          <Pressable
            style={[
              globalStyles.alignItemsCenter,
              globalStyles.flexDirectionRow,
              globalStyles.mt4,
            ]}
          >
            <InstagramIcon size={15} color={ColorPalette.YELLOW_200} />
            <Text
              style={[
                globalStyles.px3,
                globalStyles.fs14,
                globalStyles.fontWeightMedium,
              ]}
              color={ColorPalette.YELLOW_200}
            >
              jysk_ua
            </Text>
          </Pressable>
          <Pressable
            style={[
              globalStyles.alignItemsCenter,
              globalStyles.flexDirectionRow,
              globalStyles.mt4,
            ]}
          >
            <GlobeIcon size={15} color={ColorPalette.YELLOW_200} />
            <Text
              style={[
                globalStyles.px3,
                globalStyles.fs14,
                globalStyles.fontWeightMedium,
              ]}
              color={ColorPalette.YELLOW_200}
            >
              jysk.ua
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export { SellerInfo };
