import React, { FC } from 'react';
import { View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { useTranslation, useEffect, useState } from '~/hooks/hooks';
import { Box } from './components/components';
import { BoxType } from './common/enums/enums';
import { styles } from './styles';
import { intervalSetter } from './helpers/interval-setter';

type Props = {
  endDate: Date;
};

const Countdown: FC<Props> = ({ endDate }) => {
  const { t } = useTranslation();
  const [duration, setDuration] = useState({
    days: '0',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const timerId = intervalSetter(setDuration, endDate);

    return () => clearInterval(timerId);
  }, []);
  const { days, hours, minutes, seconds } = duration;

  return (
    <View style={[globalStyles.flexDirectionRow, styles.wrapper]}>
      <Box
        boxPosition={BoxType.LEFT}
        timeName={t('common:time.DAYS')}
        timeValue={days}
      />
      <Box timeName={t('common:time.HOURS')} timeValue={hours} />
      <Box timeName={t('common:time.MINUTES_SHORT')} timeValue={minutes} />
      <Box
        boxPosition={BoxType.RIGHT}
        timeName={t('common:time.SECONDS_SHORT')}
        timeValue={seconds}
      />
    </View>
  );
};

export { Countdown };
