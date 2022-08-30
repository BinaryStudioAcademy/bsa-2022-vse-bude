import React, { FC } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome5';
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

const AlertIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="alert-triangle" {...iconProps} />
);

const BackIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="chevron-left" {...iconProps} />
);

const CameraIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="camera" {...iconProps} />
);

const CrossIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="x" {...iconProps} />
);

const LogInIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="log-in" {...iconProps} />
);

const PlusIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="plus-circle" {...iconProps} />
);

const ImageIcon: AppIcon = (iconProps) => (
  <FeatherIcon name="image" {...iconProps} />
);

const InfoIcon: AppIcon = (iconProps) => (
  <Icon name="info-circle" {...iconProps} />
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
  LogInIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  AlertIcon,
  BackIcon,
  CustomFeatherIcon,
  CameraIcon,
  CrossIcon,
  PlusIcon,
  ImageIcon,
  InfoIcon,
};
