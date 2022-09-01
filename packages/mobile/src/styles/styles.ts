import { StyleSheet } from 'react-native';
import { FLEX_BOX_STYLES } from './flex-box/flex-box';
import { FONT_STYLES } from './font/font';
import { MARGINS_STYLES } from './margins/margins';
import { PADDING_STYLES } from './paddings/paddings';
import { SHADOW_STYLE } from './shadow/shadow';

export const globalStyles = StyleSheet.create({
  ...FLEX_BOX_STYLES,
  ...FONT_STYLES,
  ...MARGINS_STYLES,
  ...PADDING_STYLES,
  ...SHADOW_STYLE,
});
