import React, { ComponentPropsWithoutRef } from 'react';
import { Button } from '../button/button';

type PrimaryButtonProps = ComponentPropsWithoutRef<typeof Button>;

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return <Button {...props} />;
};

export { PrimaryButton };
