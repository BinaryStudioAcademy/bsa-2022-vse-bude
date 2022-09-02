import React, { ComponentPropsWithoutRef } from 'react';
import { useCustomTheme } from '~/hooks/hooks';
import { Button } from '../button/button';

type SecondaryButtonProps = ComponentPropsWithoutRef<typeof Button>;

const SecondaryButton: React.FC<SecondaryButtonProps> = (props) => {
  const { colors } = useCustomTheme();

  return <Button buttonColor={colors.secondary} {...props} />;
};

export { SecondaryButton };
