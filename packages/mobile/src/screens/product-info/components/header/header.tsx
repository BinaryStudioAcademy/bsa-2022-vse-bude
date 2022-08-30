import React, { FC } from 'react';
import { HeaderButton, View, Text } from '~/components/components';
import { useCustomTheme } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type ItemHeaderProps = {
  onBackPress: () => void;
};

const Header: FC<ItemHeaderProps> = ({ onBackPress }) => {
  const { colors } = useCustomTheme();

  return (
    <View
      style={[
        globalStyles.flexDirectionRow,
        globalStyles.alignItemsCenter,
        globalStyles.justifyContentCenter,
        globalStyles.px3,
        globalStyles.py5,
        { backgroundColor: colors.backgroundSecondary },
      ]}
    >
      <View style={styles.button}>
        <HeaderButton
          label="List"
          onPress={onBackPress}
          buttonColor={colors.yellow}
        />
      </View>
      <Text
        style={[
          globalStyles.fs17,
          globalStyles.fontWeightBold,
          { color: colors.text, justifyContent: 'flex-end' },
        ]}
      >
        Items
      </Text>
    </View>
  );
};

export { Header };
