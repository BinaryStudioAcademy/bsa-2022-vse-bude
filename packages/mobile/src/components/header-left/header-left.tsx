import React, { FC } from 'react';
import { ColorPalette } from '@vse-bude/shared';
import { RootNavigationProps } from '~/common/types/navigation/navigation-props';
import { useNavigation, useTranslation } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
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
    <TouchableWithoutFeedback onPress={navigation.goBack}>
      <View
        style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}
      >
        <ArrowLeftIcon style={{ color: ColorPalette.YELLOW_100 }} />
        <Text style={{ color: ColorPalette.YELLOW_100 }}>
          {t('common:common.HOME')}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export { HeaderLeft };
