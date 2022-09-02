import React, { FC, ReactElement } from 'react';
import { HeaderSave, ScreenWrapper, ScrollView } from '~/components/components';
import { useNavigation, useRoute, useLayoutEffect } from '~/hooks/hooks';
import { RootScreenName } from '~/common/enums/enums';
import { globalStyles } from '~/styles/styles';
import { RootNavigationProps } from '~/common/types/types';
import { NewItemForm } from './components/new-item-form/new-item-form';
import { NewAuctionForm } from './components/new-auction-form/new-auction-form';

const NewItemScreen: FC = () => {
  const { name } = useRoute();
  const navigation = useNavigation<RootNavigationProps>();

  const handleSaveForm = (): void => {
    // TODO dispatch
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderSave onPress={handleSaveForm} />,
    });
  }, [navigation]);

  const getScreen = (screen: string): ReactElement | null => {
    switch (screen) {
      case RootScreenName.NEW_ITEM: {
        return <NewItemForm />;
      }
      case RootScreenName.NEW_AUCTION: {
        return <NewAuctionForm />;
      }
    }

    return null;
  };

  return (
    <ScreenWrapper>
      <ScrollView style={[globalStyles.flex1, globalStyles.px5]}>
        {getScreen(name)}
      </ScrollView>
    </ScreenWrapper>
  );
};

export { NewItemScreen };
