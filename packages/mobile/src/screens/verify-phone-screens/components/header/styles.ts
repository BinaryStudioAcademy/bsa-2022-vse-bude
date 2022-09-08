import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    height: 64,
    paddingBottom: 10,
  },
  text: {
    width: '100%',
    textAlign: 'center',
    lineHeight: 22,
  },
  section: {
    width: width / 3,
  },
});

export { styles };
