import { StyleSheet } from 'react-native';
import { PADDING_STYLES } from '~/styles/paddings/paddings';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    ...PADDING_STYLES.px4,
  },
});

export { styles };
