import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View, Image, PhoneIcon } from '~/components/components';
import { MOCK_SELLER } from '~/mock/mock-seller-info';
import { globalStyles } from '~/styles/styles';
import { AuthorDto, ColorPalette, SocialMedia } from '@vse-bude/shared';
import { SocialButton } from './social-button';
import { styles } from './styles';

type SellerInfoProps = Partial<AuthorDto & SocialMedia>;

const SellerInfo: FC<SellerInfoProps> = () => {
  const { t } = useTranslation();
  const { firstName, avatar, phone, socialMedia } = MOCK_SELLER;

  return (
    <View
      style={[
        styles.wrapper,
        globalStyles.mt5,
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
            {avatar ? (
              <Image style={styles.avatar} source={{ uri: avatar }} />
            ) : (
              <View style={styles.noAvatar}>
                <Text style={[styles.noAvatarText]}>
                  {firstName ? firstName[0] : 'VB'}
                </Text>
              </View>
            )}
            <Text
              style={[
                globalStyles.px4,
                globalStyles.fontWeightBold,
                globalStyles.fs14,
              ]}
            >
              {firstName || ''}
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
              {phone || ''}
            </Text>
          </View>
          {socialMedia.map((media) => (
            <SocialButton type={media.socialMedia} link={media.link} />
          ))}
        </View>
      </View>
    </View>
  );
};

export { SellerInfo };
