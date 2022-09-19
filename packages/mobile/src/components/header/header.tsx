import React, { FC } from 'react';
import {
  Text,
  View,
  HeaderLeft as ArrowBack,
  BurgerMenu,
} from '~/components/components';
import {
  useCustomTheme,
  useNavigation,
  useRoute,
  useEffect,
} from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { CommonHeaderLeftComponent } from '~/common/enums/enums';
import { getTitle } from '~/helpers/helpers';
import {
  MainNavigationParamList,
  MainNavigationProps,
  RootNavigationParamList,
  RootNavigationProps,
} from '~/common/types/types';
import { RouteProp } from '@react-navigation/native';
import { StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

type Props = {
  headerLeft?: FC | CommonHeaderLeftComponent;
  HeaderRight?: FC;
  style?: StyleProp<ViewStyle>;
  titleShown?: boolean;
};

const Header: FC<Props> = ({
  headerLeft,
  HeaderRight,
  style,
  titleShown = true,
}) => {
  const navigation = useNavigation<RootNavigationProps | MainNavigationProps>();
  const route =
    useRoute<RouteProp<RootNavigationParamList | MainNavigationParamList>>();
  const { colors } = useCustomTheme();
  const title = getTitle(route.name);
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  let HeaderLeft;
  switch (headerLeft) {
    case CommonHeaderLeftComponent.ARROW_BACK:
      HeaderLeft = ArrowBack;
      break;
    case CommonHeaderLeftComponent.BURGER_MENU:
      HeaderLeft = BurgerMenu;
      break;
    default:
      HeaderLeft = headerLeft as FC;
      break;
  }

  return (
    <View
      style={[
        { backgroundColor: colors.backgroundSecondary },
        globalStyles.flexDirectionRow,
        globalStyles.alignItemsCenter,
        styles.headerWrapper,
        globalStyles.justifyContentSpaceBetween,
        style,
      ]}
    >
      <View style={styles.leftElement}>{headerLeft && <HeaderLeft />}</View>
      <Text
        style={[
          styles.title,
          globalStyles.fs16,
          globalStyles.fontWeightSemiBold,
          globalStyles.flex1,
        ]}
      >
        {titleShown && (title || route.name)}
      </Text>
      <View style={[globalStyles.alignItemsEnd, styles.rightElement]}>
        {HeaderRight && <HeaderRight />}
      </View>
    </View>
  );
};

export { Header };
