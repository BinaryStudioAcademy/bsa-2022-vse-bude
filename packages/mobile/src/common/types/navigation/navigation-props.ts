import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  RootNavigationParamList,
  MainNavigationParamList,
  WelcomeRootNavigationParamList,
  DrawerNavigationParamList,
} from '~/common/types/navigation/navigation';

type RootNavigationProps = NativeStackNavigationProp<RootNavigationParamList>;
type MainNavigationProps = BottomTabScreenProps<MainNavigationParamList>;
type WelcomeRootNavigationProps =
  NativeStackNavigationProp<WelcomeRootNavigationParamList>;
type DrawerNavigationProps = DrawerScreenProps<DrawerNavigationParamList>;

export type {
  RootNavigationProps,
  MainNavigationProps,
  WelcomeRootNavigationProps,
  DrawerNavigationProps,
};
