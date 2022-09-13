import { LinkingOptions } from '@react-navigation/native';
import { RootNavigationParamList } from '~/common/types/types';
import { AppLinkingPrefixes } from '~/common/enums/enums';
import { config } from './config';

const Linking: LinkingOptions<RootNavigationParamList> = {
  prefixes: [
    AppLinkingPrefixes.HTTPS_VSEBUDE,
    AppLinkingPrefixes.HTTP_VSEBUDE,
    AppLinkingPrefixes.VSEBUDE,
  ],
  config,
};

export { Linking };
