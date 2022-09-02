import React, { FC } from 'react';
import { View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { useCountdownInterval } from '~/hooks/hooks';
import { CountdownSegment } from './components/components';
import { SegmentPosition } from './common/enums/enums';
import { styles } from './styles';

type Props = {
  endDate: Date;
};

const Countdown: FC<Props> = ({ endDate }) => {
  const {
    duration: { days, hours, minutes, seconds },
    timeNames: { daysName, hoursName, minutesName, secondsName },
  } = useCountdownInterval(endDate);

  return (
    <View style={[globalStyles.flexDirectionRow, styles.wrapper]}>
      <CountdownSegment
        segmentPosition={SegmentPosition.LEFT}
        timeName={daysName}
        timeValue={days}
      />
      <CountdownSegment timeName={hoursName} timeValue={hours} />
      <CountdownSegment timeName={minutesName} timeValue={minutes} />
      <CountdownSegment
        segmentPosition={SegmentPosition.RIGHT}
        timeName={secondsName}
        timeValue={seconds}
      />
    </View>
  );
};

export { Countdown };
