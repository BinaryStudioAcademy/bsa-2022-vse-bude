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

type HeaderLeftProps = {
  label: string;
};

const HeaderLeft: FC<HeaderLeftProps> = ({ label }) => {
  const navigation = useNavigation<RootNavigationProps>();

  return (
    <TouchableWithoutFeedback onPress={navigation.goBack}>
      <View
        style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}
      >
        <ArrowLeftIcon style={{ color: ColorPalette.YELLOW_100 }} size={35} />
        <Text style={[{ color: ColorPalette.YELLOW_100 }, globalStyles.fs17]}>
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export { HeaderLeft };
