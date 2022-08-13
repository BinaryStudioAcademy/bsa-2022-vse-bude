import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  RootNavigationParamList,
  AccountNavigationParamList,
} from '~/common/types/navigation/navigation';

type RootNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<RootNavigationParamList>,
  NativeStackNavigationProp<AccountNavigationParamList>
>;

export type { RootNavigationProps };
