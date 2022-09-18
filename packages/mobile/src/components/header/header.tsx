import React, { FC, FunctionComponent, useEffect } from 'react';
import { Text, View, HeaderLeft, BurgerMenu } from '~/components/components';
import { useCustomTheme, useNavigation, useRoute } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { CommonHeaderLeftComponents } from '~/common/enums/enums';
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
  commonLeftSideComponents?: CommonHeaderLeftComponents;
  LeftSideComponent?: FunctionComponent;
  RightSideComponent?: FunctionComponent;
  style?: StyleProp<ViewStyle>;
  titleShown?: boolean;
};

const Header: FC<Props> = ({
  commonLeftSideComponents,
  LeftSideComponent,
  RightSideComponent,
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
  const isArrowBackPresent =
    commonLeftSideComponents === CommonHeaderLeftComponents.ARROW_BACK;
  const isBurgerMenuPresent =
    commonLeftSideComponents === CommonHeaderLeftComponents.BURGER_MENU;

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
      <View style={globalStyles.flex1}>
        {isArrowBackPresent && <HeaderLeft />}
        {isBurgerMenuPresent && <BurgerMenu />}
        {LeftSideComponent && <LeftSideComponent />}
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
      <View style={[globalStyles.alignItemsEnd, globalStyles.flex1]}>
        {RightSideComponent && <RightSideComponent />}
      </View>
    </View>
  );
};

export { Header };
