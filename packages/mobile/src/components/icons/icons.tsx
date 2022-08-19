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
const ClockIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="clock" {...iconProps} />
);
const MessageIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="message-circle" {...iconProps} />
);

const SupportIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="help-circle" {...iconProps} />
);

const LogOutIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="log-out" {...iconProps} />
);

const ArrowLeftIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="chevron-left" {...iconProps} />
);

const ArrowRightIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="chevron-right" {...iconProps} />
);

export {
  HomeIcon,
  StarIcon,
  UserIcon,
  SettingsIcon,
  ListIcon,
  MessageIcon,
  SupportIcon,
  LogOutIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  AlertIcon,
  BackIcon,
  CustomFeatherIcon,
  CameraIcon,
  ClockIcon,
};
