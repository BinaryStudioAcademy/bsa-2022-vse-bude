import React, { FC } from 'react';
import { View, Text, FlatList, ButtonText } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { ProductDto } from '@vse-bude/shared';
import { ViewStyle } from 'react-native';
import { cutProductsDataLength } from '~/helpers/helpers';
import { useCustomTheme } from '~/hooks/hooks';
import { Product } from '../components';

type Props = {
  sectionTitle: string;
  seeAllTitle: string;
  data: ProductDto[];
  onSeeAllPress: () => void;
  wrapperStyles?: ViewStyle[];
};

const ProductsSection: FC<Props> = ({
  sectionTitle,
  seeAllTitle,
  data,
  onSeeAllPress,
  wrapperStyles,
}) => {
  const { colors } = useCustomTheme();

  return (
    <View style={wrapperStyles}>
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
        data={cutProductsDataLength(data)}
        renderItem={({ item }) => <Product productId={item.id} />}
      />
    </View>
  );
};

export { ProductsSection };
