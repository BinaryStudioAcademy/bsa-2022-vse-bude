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

const AlertIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="alert-triangle" {...iconProps} />
);

const BackIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="chevron-left" {...iconProps} />
);

const CameraIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="camera" {...iconProps} />
);

export {
  HomeIcon,
  StarIcon,
  UserIcon,
  SettingsIcon,
  ListIcon,
  AlertIcon,
  BackIcon,
  CustomFeatherIcon,
  CameraIcon,
};
