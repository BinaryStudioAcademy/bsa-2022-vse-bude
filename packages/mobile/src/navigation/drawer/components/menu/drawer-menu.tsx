import React from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { useCustomTheme, useTranslation } from '~/hooks/hooks';
import {
  Logo,
  View,
  SearchIcon,
  InfoIcon,
  NewsIcon,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const DrawerMenu = () => {
  const { colors } = useCustomTheme();
  const { t } = useTranslation();

  const handlePress = () => {
    return;
  };

  return (
    <View>
      <View style={[globalStyles.alignItemsCenter, globalStyles.py6]}>
        <Logo width={150} height={50} />
      </View>
      <DrawerItem
        icon={() => <SearchIcon color={colors.accent} size={20} />}
        label={t('common:drawer_menu.SEARCH')}
        onPress={handlePress}
        labelStyle={styles.link}
      />
      <DrawerItem
        icon={() => <NewsIcon color={colors.accent} size={20} />}
        label={t('common:drawer_menu.NEWS')}
        onPress={handlePress}
        labelStyle={styles.link}
      />
      <DrawerItem
        icon={() => <InfoIcon color={colors.accent} size={20} />}
        label={t('common:drawer_menu.ABOUT_US')}
        onPress={handlePress}
        labelStyle={styles.link}
      />
    </View>
  );
};

export { DrawerMenu };
