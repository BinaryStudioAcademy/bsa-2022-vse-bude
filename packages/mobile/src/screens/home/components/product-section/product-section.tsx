import React, { FC } from 'react';
import {
  View,
  Text,
  FlatList,
  ButtonText,
  Product,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { ProductDto } from '@vse-bude/shared';
import { StyleProp, ViewStyle } from 'react-native';
import { useCustomTheme } from '~/hooks/hooks';

type Props = {
  sectionTitle: string;
  seeAllTitle: string;
  data: ProductDto[];
  onSeeAllPress: () => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const ProductsSection: FC<Props> = ({
  sectionTitle,
  seeAllTitle,
  data,
  onSeeAllPress,
  contentContainerStyle,
}) => {
  const { colors } = useCustomTheme();

  return (
    <View style={contentContainerStyle}>
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.alignItemsCenter,
          globalStyles.justifyContentSpaceBetween,
        ]}
      >
        <Text
          style={[
            globalStyles.fs22,
            globalStyles.fontWeightBold,
            { color: colors.titlePrimary },
          ]}
        >
          {sectionTitle}
        </Text>
        <ButtonText onPress={onSeeAllPress}>{seeAllTitle}</ButtonText>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        style={globalStyles.mt6}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <Product productId={item.id} />}
      />
    </View>
  );
};

export { ProductsSection };
