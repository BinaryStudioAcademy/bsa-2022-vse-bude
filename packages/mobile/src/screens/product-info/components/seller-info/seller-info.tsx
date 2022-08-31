import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthorDto, ColorPalette, SocialMediaType } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import {
  Text,
  View,
  Image,
  Pressable,
  FacebookIcon,
  PhoneIcon,
  InstagramIcon,
  GlobeIcon,
  LinkedinIcon,
} from '../../../../components/components';
import { styles } from './styles';

const SellerInfo: FC<AuthorDto> = ({
  firstName,
  avatar,
  phone,
  socialMedia,
}) => {
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
              {firstName ? firstName : ''}
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
              {phone ? phone : ''}
            </Text>
          </View>
          {socialMedia?.map((media) => (
            <Pressable
              key={media.id}
              style={[
                globalStyles.alignItemsCenter,
                globalStyles.flexDirectionRow,
                globalStyles.mt4,
              ]}
            >
              {media.socialMedia == SocialMediaType.FACEBOOK ? (
                <FacebookIcon size={15} color={ColorPalette.YELLOW_200} />
              ) : media.socialMedia == SocialMediaType.INSTAGRAM ? (
                <InstagramIcon size={15} color={ColorPalette.YELLOW_200} />
              ) : media.socialMedia == SocialMediaType.LINKEDIN ? (
                <LinkedinIcon size={15} color={ColorPalette.YELLOW_200} />
              ) : (
                <GlobeIcon size={15} color={ColorPalette.YELLOW_200} />
              )}
              <Text
                style={[
                  globalStyles.px3,
                  globalStyles.fs14,
                  globalStyles.fontWeightMedium,
                  styles.link,
                ]}
              >
                {media.link}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

export { SellerInfo };
