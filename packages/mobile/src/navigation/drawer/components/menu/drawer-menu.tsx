import React from 'react';
import Color from 'color';
import { DrawerItem } from '@react-navigation/drawer';
import { ColorPalette, ProductQuery } from '@vse-bude/shared';

import {
  useCustomTheme,
  useTranslation,
  useAppSelector,
  useMemo,
  useState,
  useNavigation,
  useAppDispatch,
} from '~/hooks/hooks';
import { ListIcon, Spinner } from '~/components/components';
import {
  selectCategoriesNonEmpty,
  selectCategoriesDataStatus,
} from '~/store/selectors';
import { DataStatus, RootScreenName } from '~/common/enums/enums';
import { RootNavigationProps } from '~/common/types/types';
import { filters as filtersActions } from '~/store/actions';
import { styles } from './styles';

const DrawerMenu: React.FC = () => {
  const [isNestedVisible, setIsNestedVisible] = useState(true);
  const navigation = useNavigation<RootNavigationProps>();
  const categories = useAppSelector(selectCategoriesNonEmpty);
  const dataStatus = useAppSelector(selectCategoriesDataStatus);
  const { colors } = useCustomTheme();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handlePress = (categoryId: ProductQuery['categoryId']) => {
    dispatch(filtersActions.reset());
    dispatch(filtersActions.update({ categoryId }));
    navigation.navigate(RootScreenName.PRODUCTS);
  };

  const toggleVisible = () => setIsNestedVisible((current) => !current);

  const renderedItems = useMemo(() => {
    if (!isNestedVisible) {
      return null;
    }

    return categories.map(({ title, id }) => {
      return (
        <DrawerItem
          key={id}
          label={title}
          onPress={() => handlePress(id)}
          style={styles.categoryItem}
          pressColor={Color(ColorPalette.YELLOW_100).alpha(0.1).rgb().string()}
        />
      );
    });
  }, [categories, isNestedVisible]);

  const isLoading = dataStatus === DataStatus.PENDING;

  return (
    <>
      <DrawerItem
        icon={ListIcon}
        activeTintColor={colors.accent}
        inactiveTintColor={isNestedVisible ? colors.accent : undefined}
        pressColor={Color(ColorPalette.YELLOW_100).alpha(0.1).rgb().string()}
        label={t('common:drawer_menu.CATEGORIES')}
        onPress={toggleVisible}
      />
      {isLoading ? <Spinner /> : renderedItems}
    </>
  );
};

export { DrawerMenu };
