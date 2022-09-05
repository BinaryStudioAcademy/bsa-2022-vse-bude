import React, { FC } from 'react';
import { Text, Image, TouchableOpacity } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { useAppSelector } from '~/hooks/hooks';
import { selectCategoryById } from '~/store/selectors';
import { styles } from './styles';

type Props = {
  categoryId: string;
  onPress: () => void;
};

const Category: FC<Props> = ({ categoryId, onPress }) => {
  const { image, title } = useAppSelector((state) =>
    selectCategoryById(state, categoryId),
  );

  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        globalStyles.alignItemsCenter,
        globalStyles.justifyContentSpaceBetween,
        globalStyles.px2,
        globalStyles.py3,
        globalStyles.mr3,
      ]}
      onPress={() => onPress()}
    >
      <Text style={[styles.title, globalStyles.fs14]} numberOfLines={3}>
        {title}
      </Text>
      <Image style={styles.image} source={{ uri: image }} />
    </TouchableOpacity>
  );
};

export { Category };
