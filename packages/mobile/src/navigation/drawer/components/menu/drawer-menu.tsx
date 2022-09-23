import React from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import {
  useCustomTheme,
  useTranslation,
  useAppSelector,
  useMemo,
  useState,
  useNavigation,
} from '~/hooks/hooks';
import {
  Logo,
  View,
  Text,
  ListIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  Spinner,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import {
  selectCategoriesNonEmpty,
  selectCategoriesDataStatus,
} from '~/store/selectors';
import { DataStatus, RootScreenName } from '~/common/enums/enums';
import { RootNavigationProps } from '~/common/types/types';
import { styles } from './styles';

const DrawerMenu = () => {
  const [isNestedVisible, setIsNestedVisible] = useState(false);
  const navigation = useNavigation<RootNavigationProps>();
  const categories = useAppSelector(selectCategoriesNonEmpty);
  const dataStatus = useAppSelector(selectCategoriesDataStatus);
  const { colors } = useCustomTheme();
  const { t } = useTranslation();

  const handlePress = () => {
    navigation.navigate(RootScreenName.PRODUCTS);
  };

  const renderedItems = useMemo(() => {
    return categories.map(({ title, id }) => {
      return (
        <DrawerItem
          key={id}
          label={title}
          onPress={handlePress}
          labelStyle={styles.label}
        />
      );
    });
  }, [categories]);
  const isLoading = dataStatus === DataStatus.PENDING;

  return (
    <View>
      <View style={[globalStyles.alignItemsCenter, globalStyles.py6]}>
        <Logo width={150} height={50} />
      </View>
      <DrawerItem
        icon={() => <ListIcon color={colors.accent} size={20} />}
        label={() => (
          <View style={globalStyles.flexDirectionRow}>
            <Text style={styles.title}>
              {t('common:drawer_menu.CATEGORIES')}
            </Text>
            {isNestedVisible ? (
              <ArrowUpIcon size={20} color={colors.accent} />
            ) : (
              <ArrowDownIcon size={20} color={colors.accent} />
            )}
          </View>
        )}
        onPress={() => setIsNestedVisible(!isNestedVisible)}
      />
      <View
        style={[
          !isNestedVisible ? { display: 'none' } : { display: 'flex' },
          globalStyles.ml5,
        ]}
      >
        <Text style={styles.subtitle}>{t('common:drawer_menu.ITEMS')}</Text>
        {isLoading ? <Spinner /> : renderedItems}
      </View>
    </View>
  );
};

export { DrawerMenu };
