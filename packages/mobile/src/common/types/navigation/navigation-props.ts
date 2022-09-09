import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  MainNavigationParamList,
  RootNavigationParamList,
} from '../navigation/navigation';

type RootNavigationProps = NativeStackNavigationProp<RootNavigationParamList>;
type MainNavigationProps = NativeStackNavigationProp<MainNavigationParamList>;

export type { RootNavigationProps, MainNavigationProps };
