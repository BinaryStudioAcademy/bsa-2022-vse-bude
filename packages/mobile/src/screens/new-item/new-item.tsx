import React, { FC } from 'react';
import {
  DropDown,
  Input,
  ScreenWrapper,
  ScrollView,
  InfoIcon,
  Text,
  TouchableOpacity,
  View,
} from '~/components/components';
import Popover from 'react-native-popover-view';
import { useAppForm, useCustomTheme, useTranslation } from '~/hooks/hooks';
import { CALLING_CODE, CITIES, COUNTRIES, CURRENCY } from '~/mock/new-item';
import { globalStyles } from '~/styles/styles';
import { ColorPalette } from '@vse-bude/shared';
import { AddPhotos } from './components/add-photos';
import { createStyles } from './styles';

type NewItem = {
  category: string;
  titleName: string;
  description: string;
  price: number;
  currency: string;
  country: string;
  city: string;
  phone: string;
  callingCode: string;
  instagram?: string;
  facebook?: string;
  site?: string;
};

const NewItemScreen: FC = () => {
  const { t } = useTranslation();
  const { dark, colors } = useCustomTheme();
  const styles = React.useMemo(() => createStyles(), [dark, colors]);

  const { control, errors } = useAppForm<NewItem>({
    defaultValues: {
      currency: 'UAH',
      country: 'Ukraine',
      callingCode: 'UA',
    },
  });

  return (
    <ScreenWrapper>
      <ScrollView style={[globalStyles.flex1, globalStyles.px5]}>
        <View>
          <Text
            style={[
              globalStyles.fs14,
              globalStyles.mt5,
              { color: colors.subtitle },
            ]}
          >
            {t('make_a_post.DOWNLOAD_PHOTOS')}
          </Text>
          <AddPhotos />
          <Text
            style={[
              globalStyles.fs14,
              globalStyles.mt5,
              { color: colors.subtitle },
            ]}
          >
            {t('make_a_post.DESCRIPTION')}
          </Text>
          <Input
            label={t('make_a_post.CATEGORY')}
            placeholder={t('make_a_post.CATEGORY_PLACEHOLDER')}
            name="category"
            control={control}
            errors={errors}
            contentContainerStyle={globalStyles.mt5}
          />
          <Input
            label={t('make_a_post.TITLE_NAME')}
            placeholder={t('make_a_post.TITLE_NAME_PLACEHOLDER')}
            name="titleName"
            control={control}
            errors={errors}
            contentContainerStyle={globalStyles.mt5}
          />
          <Input
            label={t('make_a_post.DESCRIPTION')}
            placeholder={t('make_a_post.DESCRIPTION_PLACEHOLDER')}
            name="description"
            control={control}
            errors={errors}
            contentContainerStyle={globalStyles.mt5}
          />

          <View style={[styles.row, globalStyles.mt5]}>
            <View style={styles.leftWrap}>
              <Popover
                popoverStyle={styles.popover}
                from={
                  <TouchableOpacity style={styles.tooltipWrap}>
                    <Text style={[globalStyles.fs12]}>
                      {t('make_a_post.PRICE')}
                    </Text>
                    <InfoIcon
                      size={13}
                      color={ColorPalette.YELLOW_200}
                      style={styles.tooltipIcon}
                    />
                  </TouchableOpacity>
                }
              >
                <Text>{t('make_a_post.PRICE_TOOLTIP')}</Text>
              </Popover>
            </View>
            <View style={styles.rightWrap}>
              <Text style={[globalStyles.fs12]}>
                {t('make_a_post.CURRENCY')}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <Input
              label=""
              placeholder={t('make_a_post.PRICE_PLACEHOLDER')}
              name="price"
              control={control}
              errors={errors}
              contentContainerStyle={styles.leftInput}
            />

            <View style={styles.rightInput}>
              <DropDown
                name="currency"
                control={control}
                items={CURRENCY}
                zIndex={25}
              />
            </View>
          </View>

          <Text
            style={[
              globalStyles.fs14,
              globalStyles.mt6,
              { color: colors.subtitle },
            ]}
          >
            {t('make_a_post.CONTACT')}
          </Text>
          <DropDown
            label={t('make_a_post.COUNTRY')}
            name="country"
            control={control}
            items={COUNTRIES}
            zIndex={20}
          />
          <DropDown
            label={t('make_a_post.CITY')}
            name="city"
            control={control}
            items={CITIES}
            zIndex={15}
          />
          <View style={[styles.row, globalStyles.mt5]}>
            <View style={styles.leftWrap}>
              <Popover
                popoverStyle={styles.popover}
                from={
                  <TouchableOpacity style={styles.tooltipWrap}>
                    <Text style={[globalStyles.fs12]}>
                      {t('make_a_post.MOBILE_PHONE')}
                    </Text>
                    <InfoIcon
                      size={13}
                      color={ColorPalette.YELLOW_200}
                      style={styles.tooltipIcon}
                    />
                  </TouchableOpacity>
                }
              >
                <Text>{t('make_a_post.PHONE_TOOLTIP')}</Text>
              </Popover>
            </View>
            <View style={styles.rightWrap}>
              <Text style={[globalStyles.fs12]}>
                {t('make_a_post.CALLING_CODE')}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <Input
              label=""
              placeholder={t('make_a_post.MOBILE_PHONE_PLACEHOLDER')}
              name="phone"
              control={control}
              errors={errors}
              contentContainerStyle={styles.leftInput}
            />

            <View style={styles.rightInput}>
              <DropDown
                name="callingCode"
                control={control}
                items={CALLING_CODE}
                zIndex={10}
              />
            </View>
          </View>
          <Input
            label={t('make_a_post.INSTAGRAM')}
            placeholder={t('make_a_post.INSTAGRAM_PLACEHOLDER')}
            name="instagram"
            control={control}
            errors={errors}
            contentContainerStyle={globalStyles.mt5}
          />
          <Input
            label={t('make_a_post.FACEBOOK')}
            placeholder={t('make_a_post.FACEBOOK_PLACEHOLDER')}
            name="facebook"
            control={control}
            errors={errors}
            contentContainerStyle={[globalStyles.mt5, globalStyles.mb5]}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export { NewItemScreen };
