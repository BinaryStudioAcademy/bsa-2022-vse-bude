import React, { FC } from 'react';
import { View, Text } from '~/components/components';
import { useCustomTheme } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { BoxType } from '../../common/enums/enums';
import { styles } from './styles';

type Props = {
  timeName: string;
  timeValue: number;
  boxPosition?: BoxType;
};

const Box: FC<Props> = ({
  timeName,
  timeValue,
  boxPosition = BoxType.MIDDLE,
}) => {
  const { colors } = useCustomTheme();

  return (
    <View
      style={[
        globalStyles.alignItemsCenter,
        globalStyles.justifyContentCenter,
        styles.box,
        styles[boxPosition],
        { backgroundColor: colors.backgroundElements },
      ]}
    >
      <Text style={[globalStyles.fs36, styles.number, { color: colors.text }]}>
        {timeValue.toString()}
      </Text>
      <Text
        style={[
          globalStyles.fs14,
          globalStyles.fontWeightSemiBold,
          { color: colors.subtitle },
        ]}
      >
        {timeName}
      </Text>
    </View>
  );
};

export { Box };
