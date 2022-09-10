import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  RootNavigationParamList,
  MainNavigationParamList,
  WelcomeRootNavigationParamList,
} from './navigation';

type RootNavigationProps = NativeStackNavigationProp<RootNavigationParamList>;
type MainNavigationProps = BottomTabScreenProps<MainNavigationParamList>;
type WelcomeRootNavigationProps =
  NativeStackNavigationProp<WelcomeRootNavigationParamList>;

export type {
  RootNavigationProps,
  MainNavigationProps,
  WelcomeRootNavigationProps,
};
