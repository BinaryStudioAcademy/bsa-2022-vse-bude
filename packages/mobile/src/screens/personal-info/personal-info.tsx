import React, { FC } from 'react';
import { ScreenWrapper, ScrollView } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { ProfileImage, PersonalInfoForm } from './components/components';

const PersonalInfoScreen: FC = () => {
  const onSubmit = (): void => {
    // TODO: handle submit
  };

  return (
    <ScreenWrapper>
      <ProfileImage />
      <ScrollView style={[globalStyles.flex1, globalStyles.px5]}>
        <PersonalInfoForm onSubmit={onSubmit} />
      </ScrollView>
    </ScreenWrapper>
  );
};

export { PersonalInfoScreen };
