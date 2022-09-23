import React from 'react';

import {
  useState,
  useCustomTheme,
  useMemo,
  useTranslation,
  useAppDispatch,
  useCallback,
} from '~/hooks/hooks';
import { Divider, TextInput, View, Slider } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import {
  MINIMUM_SLIDER_PRICE,
  MAXIMUM_SLIDER_PRICE,
} from '~/common/constants/slider-price';
import { filters as filtersActions } from '~/store/actions';
import { LayoutChangeEvent } from 'react-native';
import { SPACERS } from '~/styles/spacers/spacers';
import { SectionTitle } from '../components';
import { createStyles } from './styles';

const PriceRangeSection: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { dark, colors } = useCustomTheme();
  const styles = useMemo(() => createStyles(colors), [dark, colors]);

  const [layoutWidth, setLayoutWidth] = useState<number>(0);
  const [range, setRange] = useState<number[]>([
    MINIMUM_SLIDER_PRICE,
    MAXIMUM_SLIDER_PRICE,
  ]);

  const handleContainerOnLayout = useCallback(
    ({ nativeEvent }: LayoutChangeEvent) => {
      setLayoutWidth(nativeEvent?.layout?.width ?? 0);
    },
    [],
  );

  const updateFilters = useCallback(() => {
    dispatch(filtersActions.update({ priceGt: range[0], priceLt: range[1] }));
  }, [range]);

  const handleMinPriceChange = useCallback((value: string): void => {
    setRange(([, currentMax]) => [Number(value), currentMax]);
  }, []);

  const handleMaxPriceChange = useCallback((value: string): void => {
    setRange(([currentMin]) => [currentMin, Number(value)]);
  }, []);

  return (
    <>
      <SectionTitle title={t('filter.PRICE')} />
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.alignItemsCenter,
          globalStyles.justifyContentSpaceBetween,
          globalStyles.mt4,
        ]}
      >
        <TextInput
          value={String(range[0])}
          onChangeText={handleMinPriceChange}
          onBlur={updateFilters}
          style={styles.input}
        />
        <Divider contentContainerStyle={styles.divider} />
        <TextInput
          value={String(range[1])}
          onChangeText={handleMaxPriceChange}
          onBlur={updateFilters}
          style={styles.input}
        />
      </View>
      <View
        onLayout={handleContainerOnLayout}
        style={[globalStyles.alignItemsCenter, globalStyles.mt4]}
      >
        <Slider
          values={range}
          onValuesChange={setRange}
          onValuesChangeFinish={updateFilters}
          min={MINIMUM_SLIDER_PRICE}
          max={MAXIMUM_SLIDER_PRICE}
          allowOverlap={false}
          minMarkerOverlapDistance={10}
          markerStyle={styles.sliderMarker}
          selectedStyle={styles.selectedSlider}
          trackStyle={styles.trackSlider}
          sliderLength={layoutWidth - SPACERS.spacer5 - SPACERS.spacer6 / 2}
        />
      </View>
    </>
  );
};

export { PriceRangeSection };
