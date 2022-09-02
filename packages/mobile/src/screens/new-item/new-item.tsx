import React, { FC } from 'react';
import { ScreenWrapper, ScrollView } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { NewItemForm } from './components/new-item-form/new-item-form';

const NewItemScreen: FC = () => {
  return (
    <ScreenWrapper>
      <ScrollView style={[globalStyles.flex1, globalStyles.px5]}>
        <NewItemForm />
      </ScrollView>
    </ScreenWrapper>
  );
};

export { NewItemScreen };
