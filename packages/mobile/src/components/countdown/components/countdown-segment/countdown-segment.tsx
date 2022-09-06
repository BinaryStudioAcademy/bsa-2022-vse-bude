import React, { FC } from 'react';
import { View, Text } from '~/components/components';
import { useCustomTheme } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { SegmentPosition } from '../../common/enums/enums';
import { styles } from './styles';

type Props = {
  timeName: string;
  timeValue: string;
  segmentPosition?: SegmentPosition;
};

const CountdownSegment: FC<Props> = ({
  timeName,
  timeValue,
  segmentPosition,
}) => {
  const { colors } = useCustomTheme();

  return (
    <View
      style={[
        globalStyles.alignItemsCenter,
        globalStyles.justifyContentCenter,
        styles.box,
        segmentPosition ? styles[segmentPosition] : {},
        { backgroundColor: colors.backgroundElements },
      ]}
    >
      <Text
        style={[
          globalStyles.fs36,
          styles.number,
          { color: colors.text },
          globalStyles.fontWeightExtraBold,
        ]}
      >
        {timeValue}
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

export { CountdownSegment };
