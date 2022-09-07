import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as StoreProvider } from 'react-redux';
import 'fast-text-encoding';
import RNBootSplash from 'react-native-bootsplash';
import Toast from 'react-native-toast-message';
import { Navigation } from '~/navigation/navigation';
import { store } from '~/store/store';
import { NavigationDarkTheme, NavigationTheme } from '~/config/config';
import { useColorScheme } from '~/hooks/hooks';
import { appService, pushApi } from '~/services/services';
import { i18 } from './localization/localization';

i18();
appService.init();
pushApi.init();

const App: FC = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? NavigationDarkTheme : NavigationTheme;

  return (
    <StoreProvider store={store}>
      <NavigationContainer
        theme={theme}
        onReady={() => {
          RNBootSplash.hide({ fade: true });
        }}
      >
        <Navigation />
        <Toast />
      </NavigationContainer>
    </StoreProvider>
  );
};

export { App };
