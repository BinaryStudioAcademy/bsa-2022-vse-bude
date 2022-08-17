import React, { FC } from 'react';
import { useCustomTheme } from '~/hooks/hooks';
import { ScrollView, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { ProfileImage, PersonalInfoForm } from './components/components';

const PersonalInfoScreen: FC = () => {
  const { colors } = useCustomTheme();

  const onSubmit = (): void => {
    // TODO: handle submit
  };

  return (
    <View style={{ flex: 1 }}>
      <ProfileImage />
      <ScrollView
        style={[
          globalStyles.flex1,
          globalStyles.px5,
          { backgroundColor: colors.background },
        ]}
      >
        <PersonalInfoForm onSubmit={onSubmit} />
      </ScrollView>
    </View>
  );
};

export { PersonalInfoScreen };
