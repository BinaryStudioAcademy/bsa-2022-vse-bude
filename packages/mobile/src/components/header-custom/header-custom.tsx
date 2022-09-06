import React, { FC } from 'react';
import { ColorPalette } from '@vse-bude/shared';
import { RootNavigationProps } from '~/common/types/navigation/navigation-props';
import { useNavigation } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import {
  ArrowLeftIcon,
  Text,
  TouchableWithoutFeedback,
  View,
} from '../components';

type HeaderCustomProps = {
  label: string;
  hasIcon?: boolean;
  onPress?: () => void;
};

const HeaderCustom: FC<HeaderCustomProps> = ({
  hasIcon = false,
  label,
  onPress,
}) => {
  const navigation = useNavigation<RootNavigationProps>();

  return (
    <TouchableWithoutFeedback onPress={onPress ?? navigation.goBack}>
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.alignItemsCenter,
          { marginLeft: -10 },
        ]}
      >
        {hasIcon && <ArrowLeftIcon size={35} color={ColorPalette.YELLOW_100} />}
        <Text style={{ color: ColorPalette.YELLOW_100 }}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export { HeaderCustom };
