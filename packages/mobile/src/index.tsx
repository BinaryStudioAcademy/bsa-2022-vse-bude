import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as StoreProvider } from 'react-redux';
import 'fast-text-encoding';
import { Navigation } from '~/navigation/navigation';
import { store } from '~/store/store';
import { NavigationDarkTheme, NavigationTheme } from '~/config/config';
import { useColorScheme } from '~/hooks/hooks';
import { i18 } from './localization/localization';

i18();

const App: FC = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? NavigationDarkTheme : NavigationTheme;

  return (
    <StoreProvider store={store}>
      <NavigationContainer theme={theme}>
        <Navigation />
      </NavigationContainer>
    </StoreProvider>
  );
};

export { App };
