import React from 'react';
import { useTranslation } from 'react-i18next';
import { UserProfileDto, ColorPalette } from '@vse-bude/shared';
import { Text, View, Image, PhoneIcon } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { SocialButton } from './social-button';
import { styles } from './styles';

const SellerInfo = ({ author }: { author: UserProfileDto }) => {
  const { t } = useTranslation();
  const { firstName, lastName, avatar, phone, socialMedia } = author;

  return (
    <View
      style={[
        styles.wrapper,
        globalStyles.mt5,
        globalStyles.mb6,
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
                <Text style={[styles.noAvatarText]}>{firstName[0]}</Text>
              </View>
            )}
            <Text
              style={[
                globalStyles.px4,
                globalStyles.fontWeightBold,
                globalStyles.fs14,
              ]}
            >
              {`${firstName} ${lastName}`}
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
          {phone && (
            <View
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.alignItemsCenter,
                globalStyles.mt1,
                globalStyles.mb3,
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
                {phone}
              </Text>
            </View>
          )}

          {socialMedia.map((media, index) => (
            <SocialButton
              key={index}
              type={media.socialMedia}
              link={media.link}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export { SellerInfo };
