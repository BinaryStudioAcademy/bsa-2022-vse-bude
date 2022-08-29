import React, { FC } from 'react';
import { globalStyles } from '~/styles/styles';
import { ButtonAppearance } from '~/common/enums/enums';
import { ColorPalette } from '@vse-bude/shared';
import { MOCK_IMAGES } from '~/mock/mock-images';
import {} from 'react-native';
import {
  Text,
  View,
  Image,
  Pressable,
  SecondaryButton,
  FacebookIcon,
  PhoneIcon,
  InstagramIcon,
  GlobeIcon,
} from '../components';
import { styles } from './styles';

const SellerInfo: FC = () => {
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
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.justifyContentSpaceBetween,
          globalStyles.alignItemsCenter,
        ]}
      >
        <Text style={[globalStyles.fontWeightExtraBold, globalStyles.fs16]}>
          Seller
        </Text>
        <SecondaryButton
          appearance={ButtonAppearance.OUTLINED}
          compact={true}
          label="Contact the seller"
        />
      </View>
      <View style={[globalStyles.flexDirectionColumn, globalStyles.mt4]}>
        <View
          style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}
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
        <View style={[globalStyles.ml2, globalStyles.mt4]}>
          <View
            style={[
              globalStyles.alignItemsCenter,
              globalStyles.flexDirectionRow,
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
