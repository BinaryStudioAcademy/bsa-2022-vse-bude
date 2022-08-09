import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as StoreProvider } from 'react-redux';
import 'fast-text-encoding';
import { Navigation } from '~/navigation/navigation';
import { store } from '~/store/store';

const App: FC = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </StoreProvider>
  );
};

export { App };
