import { ColorPalette } from '@vse-bude/shared';
import React, { FC } from 'react';
import { RootNavigationProps } from '~/common/types/navigation/navigation-props';
import { useNavigation, useTranslation } from '~/hooks/hooks';
import {
  ArrowLeftIcon,
  Text,
  TouchableWithoutFeedback,
  View,
} from '../components';

const HeaderLeft: FC = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const { t } = useTranslation();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <ArrowLeftIcon style={{ color: ColorPalette.YELLOW_100 }} />
        <Text style={{ color: ColorPalette.YELLOW_100 }}>
          {t('common.HOME')}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export { HeaderLeft };
