import React, { FC } from 'react';

import { RootNavigationProps } from '~/common/types/types';
import { RootScreenName } from '~/common/enums/enums';
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
  TouchableOpacity,
} from '~/components/components';
import { useCustomTheme, useNavigation, useTranslation } from '~/hooks/hooks';
import { createStyles } from './styles';

const Account: FC = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const { t } = useTranslation();
  const { dark, colors } = useCustomTheme();

  const styles = React.useMemo(() => createStyles(colors), [dark, colors]);

  const handlePersonalInfoPress = () => {
    navigation.navigate(RootScreenName.PERSONAL_INFO);
  };
  const handleSettingsPress = () => {
    navigation.navigate(RootScreenName.SETTINGS);
  };
  const handleMessagesPress = () => {
    navigation.navigate(RootScreenName.MESSAGES);
  };
  const handleSupportPress = () => {
    navigation.navigate(RootScreenName.SUPPORT);
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
        <TouchableOpacity onPress={handlePersonalInfoPress} style={styles.row}>
          <UserIcon size={30} style={styles.icon} />
          <Text style={styles.btnText}>{t('account.PERSONAL_INFO')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettingsPress} style={styles.row}>
          <SettingsIcon size={30} style={styles.icon} />
          <Text style={styles.btnText}>{t('account.SETTINGS')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMessagesPress} style={styles.row}>
          <MessageIcon size={30} style={styles.icon} />
          <Text style={styles.btnText}>{t('account.MESSAGES')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSupportPress} style={styles.row}>
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
