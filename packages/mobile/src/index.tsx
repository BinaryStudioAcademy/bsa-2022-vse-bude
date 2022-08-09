import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as StoreProvider } from 'react-redux';
import 'fast-text-encoding';
import { SafeAreaView } from '~/components/components';
import { Navigation } from '~/navigation/navigation';
import { store } from '~/store/store';
import { styles } from './styles';

const App: FC = () => {
  return (
    <StoreProvider store={store}>
      <SafeAreaView style={styles.rootContainer}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </SafeAreaView>
    </StoreProvider>
  );
};

export { App };
