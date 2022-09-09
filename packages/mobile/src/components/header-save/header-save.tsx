import React, { FC } from 'react';
import { ColorPalette } from '@vse-bude/shared';
import { useTranslation } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { Text, TouchableWithoutFeedback, View } from '../components';

type ButtonProps = {
  onPress: () => void;
};

const HeaderSave: FC<ButtonProps> = ({ onPress }) => {
  const { t } = useTranslation();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
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
