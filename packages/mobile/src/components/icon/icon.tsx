import React, { FC } from 'react';
import IconUI from 'react-native-vector-icons/Feather';

type Props = {
  size: number;
  color?: string;
};

const HomeIcon: FC<Props> = (iconProps) => (
  <IconUI name="home" {...iconProps} />
);

const StarIcon: FC<Props> = (iconProps) => (
  <IconUI name="star" {...iconProps} />
);

const UserIcon: FC<Props> = (iconProps) => (
  <IconUI name="user" {...iconProps} />
);

const SettingsIcon: FC<Props> = (iconProps) => (
  <IconUI name="settings" {...iconProps} />
);

const ListIcon: FC<Props> = (iconProps) => (
  <IconUI name="list" {...iconProps} />
);

export { HomeIcon, StarIcon, UserIcon, SettingsIcon, ListIcon };
