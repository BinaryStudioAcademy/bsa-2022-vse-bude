import React, { FC } from 'react';
import { globalStyles } from '~/styles/styles';
import { ScrollView } from 'react-native';

import { BurgerMenu, Flag } from './components/components';

const Home: FC = () => {
  return (
    <ScrollView style={globalStyles.px4}>
      <BurgerMenu
        onClick={() => {
          //TODO
        }}
      />
      <Flag/>
    </ScrollView>
  );
};

export { Home };
