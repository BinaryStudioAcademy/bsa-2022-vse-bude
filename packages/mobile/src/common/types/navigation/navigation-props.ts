import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  RootNavigationParamList,
  MainNavigationParamList,
  VerifyNavigationParamList,
} from '~/common/types/navigation/navigation';

type RootNavigationProps = NativeStackNavigationProp<RootNavigationParamList>;
type MainNavigationProps = NativeStackNavigationProp<MainNavigationParamList>;
type VerifyNavigationProps =
  NativeStackNavigationProp<VerifyNavigationParamList>;

export type { RootNavigationProps, MainNavigationProps, VerifyNavigationProps };
