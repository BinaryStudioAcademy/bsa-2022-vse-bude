import React, { FC } from 'react';
import { Text, ScreenWrapper } from '~/components/components';
import { useCustomTheme, useMemo } from '~/hooks/hooks';
import { createStyles } from './styles';

const MyList: FC = () => {
  const { dark, colors } = useCustomTheme();
  const styles = useMemo(() => createStyles(colors), [dark, colors]);

  return (
    <ScreenWrapper style={styles.screen}>
      <Text>My list screen</Text>
    </ScreenWrapper>
  );
};

export { MyList };
