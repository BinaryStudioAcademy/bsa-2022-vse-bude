import React, { FC } from 'react';
import { View, Text, FlatList, ResponsiveText } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { LotType } from '~/common/enums/enums';
import { LotData } from '~/common/types/types';
import { FlexStyle } from 'react-native';
import { Lot } from '../components';
import { styles } from './styles';

type Props = {
  sectionTitle: string;
  extendTitle: string;
  lotType: LotType;
  data: LotData;
  onExtendPress: () => void;
  wrapperStyles?: FlexStyle[];
};

const LotSection: FC<Props> = ({
  sectionTitle,
  extendTitle,
  lotType,
  data,
  onExtendPress,
  wrapperStyles,
}) => {
  const dataLengthCheck = (data: LotData) => {
    return data.length > 10 ? data.slice(0, 11) : data;
  };

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
        <ResponsiveText text={extendTitle} onPress={onExtendPress} />
      </View>
      <FlatList
        style={globalStyles.mt6}
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
    </View>
  );
};

export { LotSection };
