import React, { FC } from 'react';
import { PrimaryButton, StarIcon, Text, View } from '~/components/components';
import { useCustomTheme, useTranslation } from '~/hooks/hooks';
import { ColorPalette, ProductDto } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import { PriceWrapper } from './price-wrapper';
import { styles } from './styles';

type ProductPriceBlockProps = Pick<ProductDto, 'price'>;

const ProductPriceBlock: FC<ProductPriceBlockProps> = ({ price }) => {
  const { colors } = useCustomTheme();
  const { t } = useTranslation();

  return (
    <PriceWrapper>
      <>
        <Text
          style={[
            globalStyles.fs18,
            globalStyles.fontWeightBold,
            { color: colors.text },
          ]}
        >
          {`${t('screens:welcome.UAH')} ${price}`}
        </Text>
        <View
          style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}
        >
          <View style={styles.btnWidth}>
            <PrimaryButton label={t('common:components.BUTTON_BUY')} />
          </View>
          <View style={[globalStyles.ml5, styles.iconBorder]}>
            <StarIcon
              size={25}
              color={ColorPalette.YELLOW_200}
              style={styles.icon}
            />
          </View>
        </View>
      </>
    </PriceWrapper>
  );
};

export { ProductPriceBlock };
