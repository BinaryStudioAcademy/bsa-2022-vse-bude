import React, { FC } from 'react';
import { Divider, Image, Text, View } from '~/components/components';
import { images } from '~/assets/images/images';
import { globalStyles } from '~/styles/styles';
import { useStyles } from './styles';

const ListItem: FC = () => {
  const styles = useStyles();

  return (
    <View style={[styles.container, styles.boxShadow]}>
      <View style={globalStyles.flexDirectionRow}>
        <Image style={styles.image} source={images.list_item_image} />
        <View style={styles.description}>
          <Text style={styles.title}>Wooden rattle</Text>
          <Text style={styles.title}>Bear MWood</Text>
          <View
            style={[
              styles.row,
              globalStyles.flexDirectionRow,
              globalStyles.alignItemsEnd,
            ]}
          >
            <Text style={styles.title}>650 UAH</Text>
            <Text style={styles.status}>Purchased</Text>
          </View>
          <View
            style={[
              styles.row,
              globalStyles.flexDirectionRow,
              globalStyles.alignItemsCenter,
            ]}
          >
            <Text style={styles.sellerTitle}>Seller</Text>
            <Image style={styles.avatar} source={images.list_item_avatar} />
            <Text style={styles.sellerName}>Jaxson Carder</Text>
          </View>
        </View>
      </View>
      <Divider contentContainerStyle={{ marginVertical: 15 }} />
      <View
        style={[globalStyles.flexDirectionRow, globalStyles.alignItemsStart]}
      >
        <Text style={styles.date}>15 July 2022</Text>
        <Image
          style={styles.organization}
          source={images.list_item_organization}
        />
      </View>
    </View>
  );
};

export { ListItem };
