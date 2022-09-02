import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  RootNavigationParamList,
  VerifyNavigationParamList,
} from '~/common/types/navigation/navigation';

type RootNavigationProps = NativeStackNavigationProp<RootNavigationParamList>;
type VerifyNavigationProps =
  NativeStackNavigationProp<VerifyNavigationParamList>;

export type { RootNavigationProps, VerifyNavigationProps };
