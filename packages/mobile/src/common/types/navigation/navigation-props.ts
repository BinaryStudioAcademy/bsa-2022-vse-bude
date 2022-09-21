import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import {
  MainNavigationParamList,
  RootNavigationParamList,
  DrawerNavigationParamList,
} from '../navigation/navigation';

type RootNavigationProps = NativeStackNavigationProp<RootNavigationParamList>;
type MainNavigationProps = NativeStackNavigationProp<MainNavigationParamList>;
type DrawerNavigationProps = DrawerScreenProps<DrawerNavigationParamList>;

export type { RootNavigationProps, MainNavigationProps, DrawerNavigationProps };
