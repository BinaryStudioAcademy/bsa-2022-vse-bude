import { useTranslation } from 'next-i18next';
//import type React from 'react';
//import { useState } from 'react';
import { Row, Input } from '@primitives';
import { SectionHeader, NestedLayout } from '../../common';

export const PersonalInfo = () => {
  // const [form, setForm] = useState({
  //   firsName: '',
  //   secondName: '',
  //   email: '',
  //   phone: '',
  // });
  const { t } = useTranslation('personal-info');
  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setForm({ ...form, [event.target.name]: event.target.value });
  // };

  // const onSaveHandler = (event: React.FormEvent<HTMLButtonElement>) => {};

  // const onCanselHandler = (event: React.FormEvent<HTMLButtonElement>) => {};

  return (
    <NestedLayout>
      <form>
        <div>
          <Row>
            <Row>
              <SectionHeader>{t('PERSONAL_INFO')}</SectionHeader>
              <Input type="text" variant="primary" />
            </Row>
          </Row>
        </div>
      </form>
    </NestedLayout>
  );
};
