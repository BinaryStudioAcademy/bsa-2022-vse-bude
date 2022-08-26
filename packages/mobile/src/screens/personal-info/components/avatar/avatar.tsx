import React, { FC } from 'react';
import { Image, Spinner, UserIcon } from '~/components/components';
import { styles } from './styles';

type Props = {
  link?: string;
  isLoading?: boolean;
};

const UserAvatar: FC<Props> = ({ link, isLoading = false }) => {
  return (
    <>
      {link ? (
        <Image source={{ uri: link }} style={styles.photo} />
      ) : isLoading ? (
        <Spinner size={130} />
      ) : (
        <UserIcon size={130} />
      )}
    </>
  );
};

export { UserAvatar };
