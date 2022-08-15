import React, { FC } from 'react';
import { useCustomTheme } from '~/hooks/hooks';
import { ScrollView, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { Hero, PersonalInfoForm } from './components/components';
import { styles } from './styles';

const PersonalInfoScreen: FC = () => {
  const { colors } = useCustomTheme();

  const onSubmit = (): void => {
    // TODO: handle submit
  };

  return (
    <View style={{ flex: 1 }}>
      <Hero />
      <ScrollView
        style={[
          styles.main,
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
