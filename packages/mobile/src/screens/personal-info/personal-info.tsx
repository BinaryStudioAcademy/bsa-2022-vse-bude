import React, { FC } from 'react';
import { useCustomTheme, useSafeAreaInsets } from '~/hooks/hooks';
import {
  ScreenWrapper,
  ScrollView,
  StatusBar,
  View,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { ProfileImage, PersonalInfoForm } from './components/components';

const PersonalInfoScreen: FC = () => {
  const { dark, colors } = useCustomTheme();
  const insets = useSafeAreaInsets();

  const onSubmit = (): void => {
    // TODO: handle submit
  };

  return (
    <ScreenWrapper>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      <View style={{ flex: 1, paddingTop: insets.top }}>
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
    </ScreenWrapper>
  );
};

export { PersonalInfoScreen };
