import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as StoreProvider } from 'react-redux';
import 'fast-text-encoding';
import RNBootSplash from 'react-native-bootsplash';
import { Navigation } from '~/navigation/navigation';
import { store } from '~/store/store';
import { NavigationDarkTheme, NavigationTheme } from '~/config/config';
import { useColorScheme } from '~/hooks/hooks';
import dayjs from 'dayjs';
import Duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { i18 } from './localization/localization';

i18();

const App: FC = () => {
  dayjs.extend(Duration);
  dayjs.extend(relativeTime);
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
      </NavigationContainer>
    </StoreProvider>
  );
};

export { App };
