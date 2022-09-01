import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  RootNavigationParamList,
  MainNavigationParamList,
} from '~/common/types/navigation/navigation';

type RootNavigationProps = NativeStackNavigationProp<RootNavigationParamList>;
type MainNavigationProps = NativeStackNavigationProp<MainNavigationParamList>;

export type { RootNavigationProps, MainNavigationProps };
