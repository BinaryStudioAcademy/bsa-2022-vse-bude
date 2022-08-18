import React, { FC } from 'react';
import { View, Text, ScreenWrapper, StatusBar } from '~/components/components';
import { useCustomTheme, useSafeAreaInsets } from '~/hooks/hooks';

const Home: FC = () => {
  const insets = useSafeAreaInsets();
  const { dark } = useCustomTheme();

  return (
    <ScreenWrapper>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      <View style={{ paddingTop: insets.top, flex: 1 }}>
        <Text>Home screen</Text>
      </View>
    </ScreenWrapper>
  );
};

export { Home };
