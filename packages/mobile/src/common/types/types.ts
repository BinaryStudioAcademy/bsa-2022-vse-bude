export {
  PopoverPlacement,
  PopoverMode,
  Rect as PopoverRect,
  Size as PopoverSize,
} from 'react-native-popover-view';
export type { ItemType as DropDownItemType } from 'react-native-dropdown-picker';

export type { RootState, AppDispatch, AsyncThunkConfig } from './app/app';
export type { HttpOptions, GetHeadersParams } from './http/http';
export type {
  RootNavigationParamList,
  RootNavigationProps,
  MainNavigationProps,
  MainNavigationParamList,
  DrawerNavigationParamList,
  DrawerNavigationProps,
} from './navigation/navigation';
export type { ValidationSchema } from './validation/validation';
export type {
  FormControl,
  FormControlErrors,
  FormControlValues,
  FormControlPath,
} from './form/form';
export type {
  FontStyles,
  FlexBoxStyles,
  MarginStyles,
  PaddingStyles,
} from './styles/styles';
export type { ShowNotificationParams } from './notification/notification';
export type { AppIcon, IconProps, CustomIconProps } from './ui/ui';
export type { Theme, ThemeColors } from './theme/theme.type';
export type {
  VerifyPhoneRequestDto,
  VerifyEmailRequestDto,
  PropsVerifyScreens,
} from './verify/verify';
export type { UpdateAvatarResponseDto } from './personal-info/personal-info';
export type {
  FavoriteResponseDto,
  FavoritesMappedData,
} from './product/product';
