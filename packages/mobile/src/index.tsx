import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as StoreProvider } from 'react-redux';
import 'fast-text-encoding';
import { Navigation } from '~/navigation/navigation';
import { store } from '~/store/store';
import { NavigationDarkTheme, NavigationTheme } from '~/config/config';
import { useColorScheme, useEffect, useState } from '~/hooks/hooks';
import { WithSplashScreen } from './screens/screens';

const App: FC = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? NavigationDarkTheme : NavigationTheme;
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);
  }, []);

  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <StoreProvider store={store}>
        <NavigationContainer theme={theme}>
          <Navigation />
        </NavigationContainer>
      </StoreProvider>
    </WithSplashScreen>
  );
};

export { App };
