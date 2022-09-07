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

  //TODO: add ability to change label text (Home, Back, List)

  return (
    <TouchableWithoutFeedback onPress={navigation.goBack}>
      <View
        style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}
      >
        <ArrowLeftIcon size={35} style={{ color: ColorPalette.YELLOW_100 }} />
        <Text style={{ color: ColorPalette.YELLOW_100 }}>
          {t('common:components.HEADER_BUTTON_BACK')}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export { HeaderLeft };
