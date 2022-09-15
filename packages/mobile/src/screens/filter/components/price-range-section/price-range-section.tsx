import React from 'react';
import {
  useState,
  useCustomTheme,
  useMemo,
  useTranslation,
  useAppDispatch,
} from '~/hooks/hooks';
import {
  Button,
  Divider,
  TextInput,
  View,
  Slider,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import {
  MINIMUM_SLIDER_PRICE,
  MAXIMUM_SLIDER_PRICE,
} from '~/common/constants/slider-price';
import { filters as filtersApi } from '~/store/actions';
import { checkSliderPriceValidity } from '~/helpers/helpers';
import { SectionTitle } from '../components';
import { createStyles } from './styles';

const PriceRangeSection = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { dark, colors } = useCustomTheme();
  const styles = useMemo(() => createStyles(colors), [dark, colors]);
  const [minPrice, setMinPrice] = useState(MINIMUM_SLIDER_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAXIMUM_SLIDER_PRICE);

  const onSliderValuesChange = (values: number[]) => {
    const [min, max] = values;
    setMinPrice(min);
    setMaxPrice(max);
  };

  const onPriceRangeSelect = () => {
    dispatch(filtersApi.setPriceRange([minPrice, maxPrice]));
  };

  const onPriceTextChange = (
    price: string,
    priceSetter: (value: number) => void,
  ) => {
    priceSetter(checkSliderPriceValidity(price));
  };

  return (
    <View>
      <SectionTitle title={t('filter.PRICE')} style={globalStyles.mt5} />
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.alignItemsCenter,
          globalStyles.justifyContentSpaceBetween,
          globalStyles.mt5,
        ]}
      >
        <TextInput
          value={`${minPrice}`}
          onChangeText={(value) => onPriceTextChange(value, setMinPrice)}
          style={styles.input}
        />

        <Divider contentContainerStyle={styles.divider} />
        <TextInput
          value={`${maxPrice}`}
          onChangeText={(value) => onPriceTextChange(value, setMaxPrice)}
          style={styles.input}
        />
        <Button compact={true} label="Ok" onPress={onPriceRangeSelect} />
      </View>
      <View style={globalStyles.alignItemsCenter}>
        <Slider
          markerStyle={styles.sliderMarker}
          pressedMarkerStyle={styles.pressedSliderMarker}
          selectedStyle={styles.selectedSlider}
          trackStyle={styles.trackSlider}
          values={[+minPrice, +maxPrice]}
          sliderLength={styles.sliderWidth.width}
          onValuesChange={onSliderValuesChange}
          min={MINIMUM_SLIDER_PRICE}
          max={MAXIMUM_SLIDER_PRICE}
          allowOverlap={false}
          minMarkerOverlapDistance={10}
        />
      </View>
    </View>
  );
};

export { PriceRangeSection };
