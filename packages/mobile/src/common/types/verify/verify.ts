import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootScreenName } from '~/common/enums/enums';
import { RootNavigationParamList } from '../types';

type VerifyPhoneRequestDto = {
  phone: string;
};

type VerifyEmailRequestDto = {
  email: string;
};

type PropsVerifyScreens = NativeStackScreenProps<
  RootNavigationParamList,
  typeof RootScreenName.VERIFY_EMAIL
>;

export type {
  VerifyPhoneRequestDto,
  VerifyEmailRequestDto,
  PropsVerifyScreens,
};
