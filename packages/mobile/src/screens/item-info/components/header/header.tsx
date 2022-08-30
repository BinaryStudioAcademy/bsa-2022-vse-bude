import React, { FC } from 'react';
import { HeaderButton, View, Text, BurgerMenu } from '~/components/components';
import { useCustomTheme } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';

type ItemHeaderProps = {
  onBackPress: () => void;
  onBurgerPress: () => void;
};

const Header: FC<ItemHeaderProps> = ({ onBackPress, onBurgerPress }) => {
  const { colors } = useCustomTheme();

  return (
    <View
      style={[
        globalStyles.flexDirectionRow,
        globalStyles.justifyContentSpaceBetween,
        globalStyles.alignItemsCenter,
        globalStyles.px3,
        { backgroundColor: colors.backgroundSecondary },
      ]}
    >
      <HeaderButton
        label="List"
        onPress={onBackPress}
        buttonColor={colors.yellow}
      />
      <Text
        style={[
          globalStyles.fs17,
          globalStyles.fontWeightBold,
          { color: colors.text },
        ]}
      >
        Items
      </Text>
      <BurgerMenu onPress={onBurgerPress} />
    </View>
  );
};

export { Header };
