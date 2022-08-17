import React, { FC } from 'react';
import { useCustomTheme } from '~/hooks/hooks';
import { Text } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  label: string;
};

const Title: FC<Props> = ({ label }) => {
  const { colors } = useCustomTheme();

  return (
    <Text
      style={[
        styles.title,
        globalStyles.fs14,
        globalStyles.mt5,
        { color: colors.subtitle },
      ]}
    >
      {label}
    </Text>
  );
};

export { Title };
