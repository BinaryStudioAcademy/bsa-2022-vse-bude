import React, { FC } from 'react';
import { View, Text, FlatList, TextButton } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { ProductDto } from '@vse-bude/shared';
import { FlexStyle } from 'react-native';
import { cutProductsDataLength } from '~/helpers/helpers';
import { Product } from '../components';
import { styles } from './styles';

type Props = {
  sectionTitle: string;
  extendTitle: string;
  data: ProductDto[];
  onExtendPress: () => void;
  wrapperStyles?: FlexStyle[];
};

const ProductsSection: FC<Props> = ({
  sectionTitle,
  extendTitle,
  data,
  onExtendPress,
  wrapperStyles,
}) => {
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
            styles.lotTitle,
          ]}
        >
          {sectionTitle}
        </Text>
        <TextButton text={extendTitle} onPress={onExtendPress} />
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
