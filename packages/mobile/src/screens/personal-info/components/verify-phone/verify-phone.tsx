import React, { FC } from 'react';
import { useCustomTheme } from '~/hooks/hooks';
import { Pressable, Text } from '~/components/components';
import { globalStyles } from '~/styles/styles';

type Props = {
  onPress: () => void;
};

const VerifyPhoneField: FC<Props> = ({ onPress }) => {
  const { colors } = useCustomTheme();

  return (
    <Pressable style={globalStyles.mt2} onPress={onPress}>
      <Text style={[globalStyles.fs14, { color: colors.accent }]}>
        Verify phone
      </Text>
    </Pressable>
  );
};

export { VerifyPhoneField };
