import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { RootNavigationProps } from '~/common/types/navigation/navigation-props';
//import { AccountScreenName } from '~/common/enums/enums';
import {
  View,
  ScreenWrapper,
  Text,
  SettingsIcon,
  SupportIcon,
  MessageIcon,
  UserIcon,
} from '~/components/components';
import { useNavigation } from '~/hooks/hooks';
import { styles } from './styles';

enum AccountScreenName {
  ACCOUNT_ROOT = 'Account',
  PERSONAL_INFO = 'PersonalInfo',
  SETTINGS = 'Settings',
  MESSAGES = 'Messages',
  SUPPORT = 'Support',
}

const Account: FC = () => {
  const navigation = useNavigation<RootNavigationProps>();

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

  return (
    <ScreenWrapper>
      <View style={styles.headerContent}>
        <Text>header</Text>
      </View>
      <View style={styles.screen}>
        <TouchableOpacity onPress={handlePersonalInfo}>
          <UserIcon />
          <Text>Personal Info</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettings}>
          <SettingsIcon />
          <Text>Settings </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMessages}>
          <MessageIcon />
          <Text>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSupport}>
          <SupportIcon />
          <Text>Support</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export { Account };
