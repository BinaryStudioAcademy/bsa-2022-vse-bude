import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    height: 64,
    paddingBottom: 10,
  },
  text: {
    position: 'absolute',
    zIndex: -1,
    bottom: 5,
    width: width,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export { styles };
