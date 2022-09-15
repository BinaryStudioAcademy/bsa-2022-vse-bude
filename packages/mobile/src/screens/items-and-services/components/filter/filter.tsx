import { ColorPalette } from '@vse-bude/shared';
import React, { FC, useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { View, Text, CrossIcon } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  title: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  onFilterClose: () => void;
};

const Filter: FC<Props> = ({ title, contentContainerStyle, onFilterClose }) => {
  const [visible, setVisible] = useState(true);

  const onClose = () => {
    setVisible(false);
    onFilterClose();
  };

  return (
    <>
      {visible && (
        <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.px4,
            globalStyles.py2,
            globalStyles.alignItemsCenter,
            styles.wrapper,
            contentContainerStyle,
          ]}
        >
          <Text style={[globalStyles.fontWeightSemiBold, styles.text]}>
            {title}
          </Text>
          <CrossIcon
            size={16}
            color={ColorPalette.GRAY_300}
            onPress={onClose}
          />
        </View>
      )}
    </>
  );
};

export { Filter };
