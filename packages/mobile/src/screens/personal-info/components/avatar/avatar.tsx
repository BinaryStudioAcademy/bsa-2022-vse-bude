import React, { FC } from 'react';
import { Image, Spinner, UserIcon } from '~/components/components';
import { styles } from './styles';

type Props = {
  link?: string;
  isLoading?: boolean;
};

const UserAvatar: FC<Props> = ({ link, isLoading = false }) => {
  if (!link) {
    const Icon = isLoading ? Spinner : UserIcon;

    return <Icon size={130} />;
  }

  return <Image source={{ uri: link }} style={styles.photo} />;
};

export { UserAvatar };
