import React, { FC } from 'react';
import { View, Text, FlatList, ResponsiveText } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { LotType } from '~/common/enums/enums';
import { LotData } from '~/common/types/types';
import { Lot } from '../components';
import { styles } from './styles';

type Props = {
  sectionTitle: string;
  extendTitle: string;
  lotType: LotType;
  data: LotData;
  onExtendPress: () => void;
};

const LotSection: FC<Props> = ({
  sectionTitle,
  extendTitle,
  lotType,
  data,
  onExtendPress,
}) => {
  const dataLengthCheck = (data: LotData) => {
    return data.length > 10 ? data.slice(0, 11) : data;
  };

  return (
    <>
      <View style={styles.auctionHeaderWrapper}>
        <Text
          style={[
            globalStyles.fs22,
            globalStyles.fontWeightBold,
            styles.lotTitle,
          ]}
        >
          {sectionTitle}
        </Text>
        <ResponsiveText text={extendTitle} onPress={onExtendPress} />
      </View>
      <FlatList
        style={styles.lotsWrapper}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={dataLengthCheck(data)}
        renderItem={({ item }) => (
          <Lot
            type={lotType}
            price={item.price}
            imgSrc={item.imgSrc}
            description={item.description}
            title={item.title}
          />
        )}
      />
    </>
  );
};

export { LotSection };
