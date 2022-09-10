import { LinkingOptions } from '@react-navigation/native';
import { RootNavigationParamList } from '~/common/types/types';
import { config } from './config';
import { prefixes } from './prefixes';

const linking: LinkingOptions<RootNavigationParamList> = {
  prefixes,
  config,
};

export { linking };
