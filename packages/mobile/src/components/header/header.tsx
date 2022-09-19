import React, { FC, FunctionComponent, useEffect } from 'react';
import {
  Text,
  View,
  HeaderLeft as ArrowBack,
  BurgerMenu,
} from '~/components/components';
import { useCustomTheme, useNavigation, useRoute } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { commonHeaderLeftComponent } from '~/common/enums/enums';
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
  commonHeaderLeft?: commonHeaderLeftComponent;
  HeaderLeft?: FunctionComponent;
  HeaderRight?: FunctionComponent;
  style?: StyleProp<ViewStyle>;
  titleShown?: boolean;
};

const Header: FC<Props> = ({
  commonHeaderLeft,
  HeaderLeft,
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
  const isArrowBack = commonHeaderLeft === commonHeaderLeftComponent.ARROW_BACK;
  const isBurgerMenu =
    commonHeaderLeft === commonHeaderLeftComponent.BURGER_MENU;

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
      <View style={styles.leftElement}>
        {isArrowBack && <ArrowBack />}
        {isBurgerMenu && <BurgerMenu />}
        {HeaderLeft && <HeaderLeft />}
      </View>
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
