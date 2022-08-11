import React, { FC } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { AppIcon, IconProps } from '~/common/types/types';

const CustomFeatherIcon: FC<IconProps> = (iconProps) => (
  <FeatherIcon {...iconProps} />
);

const HomeIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="home" {...iconProps} />
);

const StarIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="star" {...iconProps} />
);

const UserIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="user" {...iconProps} />
);

const SettingsIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="settings" {...iconProps} />
);

const ListIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="list" {...iconProps} />
);

export { HomeIcon, StarIcon, UserIcon, SettingsIcon, ListIcon, CustomFeatherIcon };
