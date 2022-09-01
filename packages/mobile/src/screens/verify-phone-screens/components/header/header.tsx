import React, { FC } from 'react';
import { useCustomTheme } from '~/hooks/hooks';
import { View, HeaderButton, Text } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  labelButton?: string;
  onPress?: () => void;
  hideButton?: boolean;
};

const Header: FC<Props> = ({ labelButton, onPress, hideButton }) => {
  const { colors } = useCustomTheme();
  const isShowButton = !hideButton && onPress && labelButton;

  return (
    <View
      style={[
        globalStyles.justifyContentEnd,
        styles.header,
        { backgroundColor: colors.backgroundSecondary },
      ]}
    >
      <View
        style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}
      >
        {isShowButton && (
          <HeaderButton
            label={labelButton}
            onPress={onPress}
            color={colors.accent}
          />
        )}
        <Text
          style={[
            globalStyles.fs17,
            globalStyles.fontWeightSemiBold,
            styles.text,
            { color: colors.text },
          ]}
        >
          Verify
        </Text>
      </View>
    </View>
  );
};

export { Header };
