import React, { FC } from 'react';
import { View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { getStrictTimeToEvent } from '~/helpers/date/date';
import { useTranslation, useEffect, useState } from '~/hooks/hooks';
import { Box } from './components/components';
import { BoxType } from './common/enums/enums';
import { styles } from './styles';
import { timeIntervalSetter } from './helpers/time-interval-setter';

type Props = {
  endDate: Date;
};

const Countdown: FC<Props> = ({ endDate }) => {
  const { t } = useTranslation();
  const [duration, setDuration] = useState(getStrictTimeToEvent(endDate));
  const { days, hours, minutes, seconds } = duration;
  useEffect(() => {
    timeIntervalSetter(setDuration, endDate);
  }, []);

  return (
    <View style={[globalStyles.flexDirectionRow, styles.wrapper]}>
      <Box
        boxPosition={BoxType.LEFT}
        timeName={t('common:time.DAYS')}
        timeValue={days}
      />
      <Box timeName={t('common:time.HOURS')} timeValue={hours} />
      <Box timeName={t('common:time.MINUTES')} timeValue={minutes} />
      <Box
        boxPosition={BoxType.RIGHT}
        timeName={t('common:time.SECONDS')}
        timeValue={seconds}
      />
    </View>
  );
};

export { Countdown };
