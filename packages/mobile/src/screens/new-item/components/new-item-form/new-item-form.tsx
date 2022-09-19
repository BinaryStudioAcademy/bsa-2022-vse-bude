import React, { FC } from 'react';
import { ColorPalette, IPostForms } from '@vse-bude/shared';
import {
  DropDown,
  Input,
  InfoIcon,
  Text,
  TouchableOpacity,
  View,
  Popover,
} from '~/components/components';
import { useAppForm, useAppSelector, useTranslation } from '~/hooks/hooks';
import { CALLING_CODE, CITIES, COUNTRIES, CURRENCY } from '~/mock/new-item';
import { globalStyles } from '~/styles/styles';
import { selectCategories } from '~/store/categories/selectors';
import { categoryForDropdown } from '~/helpers/category/format-category-for-dropdown';
import { AddPhotos } from '../add-photos/add-photos';

import { useStyles } from './styles';

const NewItemForm: FC = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  const categories = useAppSelector(selectCategories);
  const formattedCategories =
    categories && categories.length ? categoryForDropdown(categories) : null;

  const { control, errors } = useAppForm<IPostForms>({
    defaultValues: {
      currency: 'UAH',
      country: 'Ukraine',
      callingCode: 'UA',
    },
  });

  return (
    <View>
      <Text style={[globalStyles.fs14, globalStyles.mt5, styles.title]}>
        {t('make_a_post.DOWNLOAD_PHOTOS')}
      </Text>
      <AddPhotos />
      <Text style={[globalStyles.fs14, globalStyles.mt5, styles.title]}>
        {t('make_a_post.DESCRIPTION')}
      </Text>
      {formattedCategories && (
        <DropDown
          label={t('make_a_post.CATEGORY')}
          placeholder={t('make_a_post.CATEGORY_PLACEHOLDER')}
          name="category"
          control={control}
          items={formattedCategories}
          zIndex={19}
        />
      )}
      <Input
        label={t('make_a_post.TITLE_NAME')}
        placeholder={t('make_a_post.TITLE_NAME_PLACEHOLDER')}
        name="title"
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

      <View
        style={[
          styles.row,
          globalStyles.mt5,
          globalStyles.alignItemsCenter,
          globalStyles.flexDirectionRow,
        ]}
      >
        <View style={[styles.leftWrap, globalStyles.flexDirectionRow]}>
          <Popover
            popoverStyle={styles.popover}
            from={
              <TouchableOpacity style={globalStyles.flexDirectionRow}>
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
          <Text style={[globalStyles.fs12]}>{t('make_a_post.CURRENCY')}</Text>
        </View>
      </View>

      <View
        style={[
          styles.row,
          globalStyles.alignItemsCenter,
          globalStyles.flexDirectionRow,
        ]}
      >
        <Input
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

      <Text style={[globalStyles.fs14, globalStyles.mt6, styles.title]}>
        {t('make_a_post.CONTACT')}
      </Text>
      <DropDown
        label={t('make_a_post.COUNTRY')}
        name="country"
        control={control}
        items={COUNTRIES}
        zIndex={20}
        disabled={true}
        placeholder={t('make_a_post.COUNTRY_PLACEHOLDER')}
      />
      <DropDown
        label={t('make_a_post.CITY')}
        name="city"
        control={control}
        items={CITIES}
        zIndex={15}
        placeholder={t('make_a_post.CITY_PLACEHOLDER')}
      />
      <View
        style={[
          styles.row,
          globalStyles.mt5,
          globalStyles.alignItemsCenter,
          globalStyles.flexDirectionRow,
        ]}
      >
        <View style={[styles.leftWrap, globalStyles.flexDirectionRow]}>
          <Popover
            popoverStyle={styles.popover}
            from={
              <TouchableOpacity style={globalStyles.flexDirectionRow}>
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

      <View
        style={[
          styles.row,
          globalStyles.alignItemsCenter,
          globalStyles.flexDirectionRow,
        ]}
      >
        <Input
          placeholder={'+380 ()'}
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
        contentContainerStyle={[globalStyles.mt5]}
      />
      <Input
        label={t('make_a_post.SITE')}
        placeholder={t('make_a_post.SITE_PLACEHOLDER')}
        name="site"
        control={control}
        errors={errors}
        contentContainerStyle={[globalStyles.mt5, globalStyles.mb5]}
      />
    </View>
  );
};

export { NewItemForm };
