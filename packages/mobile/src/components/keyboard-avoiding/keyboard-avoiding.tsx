import React, { FC, ReactElement } from 'react';
import { View } from '~/components/components';
import { useKeyboardHeight } from '~/hooks/hooks';

type KeyboardAvoidingProps = {
  children: ReactElement;
  style: Record<string, unknown>;
};

const KeyboardAvoiding: FC<KeyboardAvoidingProps> = ({
  children,
  style,
}): ReactElement => {
  const keyboardHeight = useKeyboardHeight();

  //TODO: use animation for slide behavior

  return (
    <View style={[{ paddingBottom: keyboardHeight / 4 }, style]}>
      {children}
    </View>
  );
};

export { KeyboardAvoiding };
