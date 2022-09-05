import { Checkbox, Input } from '@components/primitives';
import { SectionHeader } from '@components/profile/user-account/common';
import { Flex } from 'grapefruit-ui';
import { useTypedSelector } from '@hooks';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { Select } from '@components/primitives/select';
import type { SelectOption } from '@components/primitives/select/types';
import * as styles from './styles';
import { SellerFields } from './form-utils';
import type { ContactBlockProps } from './types';

export default function ContactBlock({
  setValue,
  register,
  errors,
}: ContactBlockProps) {
  const currentProduct = useTypedSelector((state) => state.product.currentItem);
  const [showPhone, setShowPhone] = useState(!currentProduct?.phone);
  const { t } = useTranslation();
  const [seller, setSeller] = useState<SelectOption>({
    value: SellerFields(t).USER.value,
    title: SellerFields(t).USER.title,
  });

  const setShowPhoneWrapper = (value) => {
    setValue('phone', '');
    setShowPhone(value);
  };

  return (
    <>
      <SectionHeader>{t('create-post:headline.contact')}</SectionHeader>
      <Flex css={styles.groupInputs}>
        <div css={styles.selectRow}>
          <Select
            label={t('create-post:label.seller')}
            options={Object.keys(SellerFields(t)).map((item) => ({
              value: SellerFields(t)[item].value,
              title: SellerFields(t)[item].title,
            }))}
            value={seller.title}
            setValue={setSeller}
          />
        </div>
        <div css={styles.inputRow}>
          {seller.value === SellerFields(t).OTHER.value && (
            <Input
              id="post-username"
              type="text"
              name="username"
              variant="primary"
              label={t('create-post:label.username')}
              placeholder={t('create-post:placeholder.username')}
            />
          )}
        </div>
      </Flex>
      <Flex css={styles.groupInputs}>
        <div css={styles.inputRow}>
          <Input
            labelRequiredMark
            required
            error={errors.country?.message}
            id="post-country"
            type="text"
            name="country"
            variant="primary"
            label={t('create-post:label.country')}
            placeholder={t('create-post:placeholder.country')}
            {...register('country')}
          />
        </div>
        <div css={styles.inputRow}>
          <Input
            id="post-city"
            type="text"
            name="city"
            variant="primary"
            label={t('create-post:label.city')}
            placeholder={t('create-post:placeholder.city')}
            {...register('city')}
          />
        </div>
      </Flex>
      <Flex css={styles.groupInputs}>
        <div css={styles.inputRow}>
          <Input
            required={!showPhone}
            labelRequiredMark={!showPhone}
            tooltip={t('create-post:tooltip.phone')}
            error={errors.phone?.message}
            id="post-phone"
            type="text"
            name="phone"
            variant="primary"
            label={t('create-post:label.phone')}
            placeholder={t('create-post:placeholder.phone')}
            inerasableValue="+380"
            disabled={showPhone}
            {...register('phone')}
          />
        </div>
        <Checkbox
          onChange={setShowPhoneWrapper}
          value={showPhone}
          label={t('create-post:label.checkbox')}
        />
      </Flex>
      {seller.value === SellerFields(t).OTHER.value && (
        <>
          <div css={styles.inputRow}>
            <Input
              id="post-instagram"
              type="text"
              name="instagram"
              variant="primary"
              label={t('create-post:label.instagram')}
              placeholder={t('create-post:placeholder.instagram')}
              {...register('instagram')}
            />
          </div>
          <div css={styles.inputRow}>
            <Input
              id="post-facebook"
              type="text"
              name="facebook"
              variant="primary"
              label={t('create-post:label.facebook')}
              placeholder={t('create-post:placeholder.facebook')}
              {...register('facebook')}
            />
          </div>
          <div css={styles.inputRow}>
            <Input
              id="post-site"
              type="text"
              name="site"
              variant="primary"
              label={t('create-post:label.site')}
              placeholder={t('create-post:placeholder.site')}
              {...register('site')}
            />
          </div>
        </>
      )}
    </>
  );
}
