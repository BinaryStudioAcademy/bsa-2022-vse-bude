import React, { useState } from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { CategoriesScreenName } from '~/common/enums/enums';
import { useCustomTheme } from '~/hooks/hooks';
import {
  ListIcon,
  View,
  SearchIcon,
  NewsIcon,
  InfoIcon,
  Text,
  Logo,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const DrawerContent = (props: DrawerContentComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { colors } = useCustomTheme();

  const handlePress = () => {
    return;
  };

  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text style={styles.header}>Menu</Text>
        <View style={[globalStyles.alignItemsCenter, globalStyles.py7]}>
          <Logo />
        </View>
        <DrawerItem
          icon={() => <ListIcon color={colors.accent} size={20} />}
          label="Category"
          onPress={() => setIsVisible(!isVisible)}
          labelStyle={styles.title}
        />
        <View
          style={[
            !isVisible ? { display: 'none' } : { display: 'flex' },
            styles.label,
          ]}
        >
          <Text style={styles.subtitle}>Items</Text>
          <DrawerItem
            label={CategoriesScreenName.CLOTHING}
            onPress={handlePress}
            labelStyle={styles.label}
          />
          <DrawerItem
            label={CategoriesScreenName.ART}
            onPress={handlePress}
            labelStyle={styles.label}
          />
          <DrawerItem
            label={CategoriesScreenName.HOME_APPLIANCE}
            onPress={handlePress}
            labelStyle={styles.label}
          />
          <DrawerItem
            label={CategoriesScreenName.TOYS}
            onPress={handlePress}
            labelStyle={styles.label}
          />
          <Text style={styles.subtitle}>Services</Text>
          <DrawerItem
            label={CategoriesScreenName.MANICURE}
            onPress={handlePress}
            labelStyle={styles.label}
          />
          <DrawerItem
            label={CategoriesScreenName.HAIRCUT}
            onPress={handlePress}
            labelStyle={styles.label}
          />
          <DrawerItem
            label={CategoriesScreenName.CAR_WASH}
            onPress={handlePress}
            labelStyle={styles.label}
          />
          <View style={styles.divider}></View>
        </View>
        <DrawerItem
          icon={() => <SearchIcon color={colors.accent} size={20} />}
          label="Search"
          onPress={handlePress}
          labelStyle={styles.title}
        />
        <DrawerItem
          icon={() => <NewsIcon color={colors.accent} size={20} />}
          label="News"
          onPress={handlePress}
          labelStyle={styles.title}
        />
        <DrawerItem
          icon={() => <InfoIcon color={colors.accent} size={20} />}
          label="About Us"
          onPress={handlePress}
          labelStyle={styles.title}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export { DrawerContent };
