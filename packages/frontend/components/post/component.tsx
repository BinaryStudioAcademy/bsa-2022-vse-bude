import { Textarea } from 'components/primitives/textarea';
import { useTranslation } from 'next-i18next';
import type React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Column, Flex, Button, Container } from '@primitives';
import { NestedLayout, SectionHeader } from 'components/sub-pages/common';
import * as styles from './styles';

export const Post = () => {
  const [form, setForm] = useState({
    photos: '',
    category: '',
    title: '',
    description: '',
    price: '',
    currency: '',
    country: '',
    city: '',
    phone: '',
    callingCode: '',
    instagram: '',
    facebook: '',
    site: '',
  });

  const { handleSubmit } = useForm();

  const { t } = useTranslation();
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSaveHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // const onCanselHandler = (event: React.FormEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  // };

  // const onDownloadAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   //const file = event.target.files;
  // };

  return (
    <NestedLayout>
      <Container>
        <h3 css={styles.pageHeader}>{t('create-post:headline.makePost')}</h3>
        <form css={styles.form} onSubmit={handleSubmit(onSaveHandler)}>
          <div css={styles.sections}>
            <Column css={styles.sectionRow}>
              <SectionHeader>
                {t('create-post:headline.downloadPhotos')}
              </SectionHeader>
              <div>drag & drop</div>
            </Column>

            <Column css={styles.sectionRow}>
              <SectionHeader>
                {t('create-post:headline.description')}
              </SectionHeader>
              <div css={styles.inputRow}>
                <Input
                  id="post-category"
                  type="text"
                  name="category"
                  value={form.category}
                  variant="primary"
                  label={t('create-post:label.category')}
                  placeholder={t('create-post:placeholder.category')}
                  onChange={changeHandler}
                />
              </div>
              <div css={styles.inputRow}>
                <Input
                  id="post-title"
                  type="text"
                  name="title"
                  value={form.title}
                  variant="primary"
                  label={t('create-post:label.name')}
                  placeholder={t('create-post:placeholder.name')}
                  onChange={changeHandler}
                />
              </div>
              <div css={styles.inputRow}>
                <Textarea
                  id="post-description"
                  name="description"
                  value={form.description}
                  label={t('create-post:label.description')}
                  placeholder={t('create-post:placeholder.description')}
                  onChange={changeHandler}
                />
              </div>
              <Flex css={styles.groupInputs}>
                <div css={styles.inputRow}>
                  <Input
                    id="post-price"
                    type="text"
                    name="price"
                    value={form.price}
                    variant="primary"
                    label={t('create-post:label.price')}
                    placeholder={t('create-post:placeholder.price')}
                    onChange={changeHandler}
                  />
                </div>
                <div css={styles.smallInputRow}>
                  <Input
                    id="post-currency"
                    type="text"
                    name="currency"
                    value={form.currency}
                    variant="primary"
                    label={t('create-post:label.currency')}
                    placeholder={t('create-post:placeholder.currency')}
                    onChange={changeHandler}
                  />
                </div>
              </Flex>
            </Column>
            <Column css={styles.sectionRow}>
              <SectionHeader>{t('create-post:headline.contact')}</SectionHeader>

              <Flex css={styles.groupInputs}>
                <div css={styles.inputRow}>
                  <Input
                    id="post-country"
                    type="text"
                    name="country"
                    value={form.country}
                    variant="primary"
                    label={t('create-post:label.country')}
                    placeholder={t('create-post:placeholder.country')}
                    onChange={changeHandler}
                  />
                </div>
                <div css={styles.inputRow}>
                  <Input
                    id="post-city"
                    type="text"
                    name="city"
                    value={form.city}
                    variant="primary"
                    label={t('create-post:label.city')}
                    placeholder={t('create-post:placeholder.city')}
                    onChange={changeHandler}
                  />
                </div>
              </Flex>
              <Flex css={styles.groupInputs}>
                <div css={styles.inputRow}>
                  <Input
                    id="post-phone"
                    type="text"
                    name="phone"
                    value={form.phone}
                    variant="primary"
                    label={t('create-post:label.phone')}
                    placeholder={t('create-post:placeholder.phone')}
                    onChange={changeHandler}
                  />
                </div>
                <div css={styles.smallInputRow}>
                  <Input
                    id="post-callingCode"
                    type="text"
                    name="callingCode"
                    value={form.callingCode}
                    variant="primary"
                    label={t('create-post:label.callingCode')}
                    placeholder={t('create-post:placeholder.callingCode')}
                    onChange={changeHandler}
                  />
                </div>
              </Flex>
              <div css={styles.inputRow}>
                <Input
                  id="post-instagram"
                  type="text"
                  name="instagram"
                  value={form.instagram}
                  variant="primary"
                  label={t('create-post:label.instagram')}
                  placeholder={t('create-post:placeholder.instagram')}
                  onChange={changeHandler}
                />
              </div>
              <div css={styles.inputRow}>
                <Input
                  id="post-facebook"
                  type="text"
                  name="facebook"
                  value={form.facebook}
                  variant="primary"
                  label={t('create-post:label.facebook')}
                  placeholder={t('create-post:placeholder.facebook')}
                  onChange={changeHandler}
                />
              </div>
              <div css={styles.inputRow}>
                <Input
                  id="post-site"
                  type="text"
                  name="site"
                  value={form.site}
                  variant="primary"
                  label={t('create-post:label.site')}
                  placeholder={t('create-post:placeholder.site')}
                  onChange={changeHandler}
                />
              </div>
            </Column>
            <div css={styles.btnWrapper}>
              <Button>{t('create-post:button.makePost')}</Button>
            </div>
          </div>
        </form>
      </Container>
    </NestedLayout>
  );
};
