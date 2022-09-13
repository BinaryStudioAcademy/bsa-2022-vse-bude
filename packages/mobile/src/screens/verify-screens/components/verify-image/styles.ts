import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    height: width / 1.5,
    resizeMode: 'contain',
  },
});

export { styles };
