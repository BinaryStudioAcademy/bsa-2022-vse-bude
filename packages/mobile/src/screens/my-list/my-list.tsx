import React, { FC } from 'react';
import { ScreenWrapper } from '~/components/components';
import { useCustomTheme, useMemo } from '~/hooks/hooks';
import { ListItem } from './components/components';
import { createStyles } from './styles';

const MyList: FC = () => {
  const { dark, colors } = useCustomTheme();
  const styles = useMemo(() => createStyles(colors), [dark, colors]);

  return (
    <ScreenWrapper style={styles.screen}>
      <ListItem />
    </ScreenWrapper>
  );
};

export { MyList };
