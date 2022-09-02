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
  DateTimePicker,
} from '~/components/components';
import { useAppForm, useTranslation, useState } from '~/hooks/hooks';
import { CALLING_CODE, CITIES, COUNTRIES } from '~/mock/new-item';
import { globalStyles } from '~/styles/styles';
import dayjs from 'dayjs';

import { AddPhotos } from '../add-photos/add-photos';

import { useStyles } from './styles';

const NewAuctionForm: FC = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  const { control, errors, setValue } = useAppForm<IPostForms>({
    defaultValues: {
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
        name="title"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
      />

      <TouchableOpacity
        onPress={() => {
          setOpenDate(true);
        }}
      >
        <Input
          label={t('make_a_post.ENDING_DATE')}
          placeholder={'-/-/-'}
          name="endDate"
          control={control}
          errors={errors}
          editable={false}
          contentContainerStyle={globalStyles.mt5}
        />
      </TouchableOpacity>
      {openDate && (
        <DateTimePicker
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          minimumDate={new Date()}
          onChange={(_, selectedDate) => {
            setOpenDate(false);
            const currentDate = dayjs(selectedDate).format('DD/MM/YYYY');
            setDate(selectedDate ?? new Date());
            setValue('endDate', currentDate);
          }}
        />
      )}
      <TouchableOpacity
        onPress={() => {
          setOpenTime(true);
        }}
      >
        <Input
          label={t('make_a_post.ENDING_TIME')}
          placeholder={'-:-'}
          name="endTime"
          control={control}
          errors={errors}
          editable={false}
          contentContainerStyle={globalStyles.mt5}
        />
      </TouchableOpacity>
      {openTime && (
        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode={'time'}
          is24Hour={true}
          display="default"
          minimumDate={new Date()}
          onChange={(_, selectedTime) => {
            setOpenTime(false);
            const currentTime = dayjs(selectedTime).format('HH:mm');
            setTime(selectedTime ?? new Date());
            setValue('endTime', currentTime);
          }}
        />
      )}

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
        <Popover
          popoverStyle={styles.popover}
          from={
            <TouchableOpacity style={globalStyles.flexDirectionRow}>
              <Text style={[globalStyles.fs12]}>
                {t('make_a_post.STARTING_BID_PRICE')}
              </Text>
              <InfoIcon
                size={13}
                color={ColorPalette.YELLOW_200}
                style={styles.tooltipIcon}
              />
            </TouchableOpacity>
          }
        >
          <Text>{t('make_a_post.STARTING_BID_PRICE')}</Text>
        </Popover>
      </View>

      <Input
        placeholder={t('make_a_post.STARTING_PRICE_PLACEHOLDER')}
        name="price"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt2}
      />
      <View
        style={[
          styles.row,
          globalStyles.alignItemsCenter,
          globalStyles.flexDirectionRow,
        ]}
      >
        <Input
          label={t('make_a_post.MIN_RANGE')}
          placeholder={t('make_a_post.MIN_RANGE_PLACEHOLDER')}
          name="minimalBid"
          control={control}
          errors={errors}
          contentContainerStyle={[
            globalStyles.mt5,
            { width: '50%', paddingRight: 5 },
          ]}
        />
        <Input
          label={t('make_a_post.MAX_RANGE')}
          placeholder={t('make_a_post.MAX_RANGE_PLACEHOLDER')}
          name="recommendedPrice"
          control={control}
          errors={errors}
          contentContainerStyle={[
            globalStyles.mt5,
            { width: '50%', paddingLeft: 5 },
          ]}
        />
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
      />
      <DropDown
        label={t('make_a_post.CITY')}
        name="city"
        control={control}
        items={CITIES}
        zIndex={15}
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
        placeholder={t('make_a_post.SITE')}
        name="site"
        control={control}
        errors={errors}
        contentContainerStyle={[globalStyles.mt5, globalStyles.mb5]}
      />
    </View>
  );
};

export { NewAuctionForm };
