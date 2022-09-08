import React, { FC, ReactNode } from 'react';
import { View } from '~/components/components';
import { globalStyles } from '~/styles/styles';

type Props = {
  children: ReactNode;
};

const ButtonsContainer: FC<Props> = ({ children }) => {
  return (
    <View
      style={[
        globalStyles.flexDirectionRow,
        globalStyles.justifyContentSpaceBetween,
        globalStyles.mt6,
        globalStyles.mb6,
      ]}
    >
      {children}
    </View>
  );
};

export { ButtonsContainer };
