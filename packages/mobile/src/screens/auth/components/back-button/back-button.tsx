import React, { FC } from 'react';
import { BackIcon, Pressable, Text } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  onBack: () => void;
};

const BackButton: FC<Props> = ({ onBack }) => {
  return (
    <Pressable
      onPress={onBack}
      style={[
        globalStyles.flexDirectionRow,
        globalStyles.alignItemsCenter,
        {
          width: '100%',
          justifyContent: 'flex-start',
        },
      ]}
    >
      <BackIcon size={35} style={{ color: '#FFFFFF' }} />
      <Text
        style={[
          styles.buttonText,
          globalStyles.fs17,
          globalStyles.fontWeightMedium,
          { color: '#FFFFFF', textAlign: 'left' },
        ]}
      >
        Back
      </Text>
    </Pressable>
  );
};

export { BackButton };
