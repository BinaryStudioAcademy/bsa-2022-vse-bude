import React, { FC } from 'react';
import { View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { useCountdownInterval, useTranslation } from '~/hooks/hooks';
import { CountdownSegment } from './components/components';
import { SegmentPosition } from './common/enums/enums';
import { styles } from './styles';

type Props = {
  endDate: Date;
};

const Countdown: FC<Props> = ({ endDate }) => {
  const { t } = useTranslation();
  const { days, hours, minutes, seconds } = useCountdownInterval(endDate);

  return (
    <View style={[globalStyles.flexDirectionRow, styles.wrapper]}>
      <CountdownSegment
        segmentPosition={SegmentPosition.LEFT}
        timeName={t('common:time.DAYS')}
        timeValue={days}
      />
      <CountdownSegment timeName={t('common:time.HOURS')} timeValue={hours} />
      <CountdownSegment
        timeName={t('common:time.MINUTES_SHORT')}
        timeValue={minutes}
      />
      <CountdownSegment
        segmentPosition={SegmentPosition.RIGHT}
        timeName={t('common:time.SECONDS_SHORT')}
        timeValue={seconds}
      />
    </View>
  );
};

export { Countdown };
