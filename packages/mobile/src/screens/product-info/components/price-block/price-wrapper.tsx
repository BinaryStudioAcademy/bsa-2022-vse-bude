import React, { FC, ReactElement } from 'react';
import { View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type PriceWrapperProps = {
  children: ReactElement;
};

const PriceWrapper: FC<PriceWrapperProps> = ({ children }): ReactElement => {
  return (
    <View
      style={[
        globalStyles.flexDirectionRow,
        globalStyles.justifyContentSpaceBetween,
        globalStyles.alignItemsCenter,
        globalStyles.px6,
        globalStyles.py4,
        styles.footer,
      ]}
    >
      {children}
    </View>
  );
};

export { PriceWrapper };
