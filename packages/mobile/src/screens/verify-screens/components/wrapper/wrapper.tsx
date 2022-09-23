import React, { FC, ReactNode } from 'react';
import { useCustomTheme } from '~/hooks/hooks';
import { ScreenWrapper, StatusBar } from '~/components/components';

type Props = {
  children: ReactNode;
};

const Wrapper: FC<Props> = ({ children }) => {
  const { colors } = useCustomTheme();

  return (
    <ScreenWrapper>
      <StatusBar backgroundColor={colors.backgroundSecondary} />
      {children}
    </ScreenWrapper>
  );
};

export { Wrapper };
