import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as StoreProvider } from 'react-redux';
import 'fast-text-encoding';
import RNBootSplash from 'react-native-bootsplash';
import Toast from 'react-native-toast-message';
import { Navigation } from '~/navigation/navigation';
import { store } from '~/store/store';
import { NavigationTheme } from '~/config/config';
import { appService } from '~/services/services';
import { i18 } from './localization/localization';
import { Linking } from './config/config';

i18();
appService.init();

const App: FC = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer
        linking={Linking}
        theme={NavigationTheme}
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
