import { LinkingOptions } from '@react-navigation/native';
import { RootNavigationParamList } from '~/common/types/types';
import { config } from './config';
import { prefixes } from './prefixes';

const Linking: LinkingOptions<RootNavigationParamList> = {
  prefixes,
  config,
};

export { Linking };
