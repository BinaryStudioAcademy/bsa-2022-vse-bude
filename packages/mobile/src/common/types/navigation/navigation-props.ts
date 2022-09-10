import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  RootNavigationParamList,
  MainNavigationParamList,
  RegistrationNavigationParamList,
} from '~/common/types/navigation/navigation';

type RootNavigationProps = NativeStackNavigationProp<RootNavigationParamList>;
type MainNavigationProps = BottomTabScreenProps<MainNavigationParamList>;
type RegistrationNavigationProps =
  NativeStackNavigationProp<RegistrationNavigationParamList>;

export type {
  RootNavigationProps,
  MainNavigationProps,
  RegistrationNavigationProps,
};
