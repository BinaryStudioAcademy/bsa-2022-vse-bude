import React, { FC } from 'react';
import { ColorPalette } from '@vse-bude/shared';
import { RootNavigationProps } from '~/common/types/navigation/navigation-props';
import { useNavigation, useTranslation } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { Text, TouchableWithoutFeedback, View } from '../components';

const HeaderSave: FC = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const { t } = useTranslation();

  return (
    <TouchableWithoutFeedback onPress={navigation.goBack}>
      <View
        style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}
      >
        <Text style={{ color: ColorPalette.YELLOW_100 }}>
          {t('common:components.BUTTON_SAVE')}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export { HeaderSave };
