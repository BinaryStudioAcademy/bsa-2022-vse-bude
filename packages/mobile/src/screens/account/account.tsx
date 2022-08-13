import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { RootNavigationProps } from '~/common/types/navigation/navigation-props';
import { AccountScreenName } from '~/common/enums/enums';
import {
  View,
  ScreenWrapper,
  Text,
  SettingsIcon,
  SupportIcon,
  MessageIcon,
  UserIcon,
  LogOutIcon,
  Logo,
} from '~/components/components';
import { useNavigation, useTranslation } from '~/hooks/hooks';
import { styles } from './styles';

const Account: FC = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const { t } = useTranslation();

  const handlePersonalInfo = () => {
    navigation.navigate(AccountScreenName.PERSONAL_INFO);
  };
  const handleSettings = () => {
    navigation.navigate(AccountScreenName.SETTINGS);
  };
  const handleMessages = () => {
    navigation.navigate(AccountScreenName.MESSAGES);
  };
  const handleSupport = () => {
    navigation.navigate(AccountScreenName.SUPPORT);
  };
  const handleLogOut = () => {
    //TODO
  };

  return (
    <ScreenWrapper style={styles.screen}>
      <View style={styles.headerContent}>
        <Logo width={120} height={30} />
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={handlePersonalInfo} style={styles.row}>
          <UserIcon size={30} style={styles.icon} />
          <Text style={styles.btnText}>{t('account.PERSONAL_INFO')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettings} style={styles.row}>
          <SettingsIcon size={30} style={styles.icon} />
          <Text style={styles.btnText}>{t('account.SETTINGS')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMessages} style={styles.row}>
          <MessageIcon size={30} style={styles.icon} />
          <Text style={styles.btnText}>{t('account.MESSAGES')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSupport} style={styles.row}>
          <SupportIcon size={30} style={styles.icon} />
          <Text style={styles.btnText}>{t('account.SUPPORT')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logOutWrapper}>
        <TouchableOpacity onPress={handleLogOut} style={styles.row}>
          <LogOutIcon size={30} style={styles.icon} />
          <Text style={[styles.btnText, styles.accentColor]}>
            {t('account.SIGN_OUT')}
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export { Account };
