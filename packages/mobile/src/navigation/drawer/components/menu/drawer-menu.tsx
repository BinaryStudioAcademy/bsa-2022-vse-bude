import React, { useState } from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { useCustomTheme, useTranslation } from '~/hooks/hooks';
import {
  Logo,
  View,
  Text,
  ListIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const DrawerMenu = () => {
  const [isNestedVisible, setIsNestedVisible] = useState(false);
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
        <DrawerItem
          label={t('common:drawer_menu.CLOTHING')}
          onPress={handlePress}
          labelStyle={styles.label}
        />
        <DrawerItem
          label={t('common:drawer_menu.ART')}
          onPress={handlePress}
          labelStyle={styles.label}
        />
        <DrawerItem
          label={t('common:drawer_menu.HOME_APPLIANCE')}
          onPress={handlePress}
          labelStyle={styles.label}
        />
        <DrawerItem
          label={t('common:drawer_menu.TOYS')}
          onPress={handlePress}
          labelStyle={styles.label}
        />
        <Text style={styles.subtitle}>{t('common:drawer_menu.SERVICES')}</Text>
        <DrawerItem
          label={t('common:drawer_menu.MANICURE')}
          onPress={handlePress}
          labelStyle={styles.label}
        />
        <DrawerItem
          label={t('common:drawer_menu.HAIR_CUT')}
          onPress={handlePress}
          labelStyle={styles.label}
        />
        <DrawerItem
          label={t('common:drawer_menu.CAR_WASH')}
          onPress={handlePress}
          labelStyle={styles.label}
        />
      </View>
    </View>
  );
};

export { DrawerMenu };
