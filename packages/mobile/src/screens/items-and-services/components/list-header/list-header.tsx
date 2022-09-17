import React, { FC } from 'react';
import { View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { filters } from '~/mock/filters';
import { StyleProp, ViewStyle } from 'react-native';
import { Filter } from '../components';
import { styles } from './styles';

type Props = {
  contentContainerStyles?: StyleProp<ViewStyle>;
};

const ListHeader: FC<Props> = ({ contentContainerStyles }) => {
  return (
    <View
      style={[
        globalStyles.flexDirectionRow,
        globalStyles.py3,
        styles.filterWrapper,
        contentContainerStyles,
      ]}
    >
      {filters.map((item) => {
        return (
          <Filter
            key={item.id}
            onFilterClose={() => {
              //TODO
            }}
            title={item.title}
            contentContainerStyle={styles.filterContainer}
          />
        );
      })}
    </View>
  );
};

export { ListHeader };
