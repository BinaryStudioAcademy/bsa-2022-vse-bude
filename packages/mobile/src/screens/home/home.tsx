import React, { FC } from 'react';
import { globalStyles } from '~/styles/styles';
import {  ScrollView } from 'react-native';

import { BurgerMenu } from './components/burger-menu/burger-menu';

const Home: FC = () => {
  return (
    <ScrollView style={globalStyles.px4}>
      <BurgerMenu
        onClick={() => {
          //TODO
        }}
      />
    </ScrollView>
  );
};

export { Home };
