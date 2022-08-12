import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapper: {
    width: width,
    height: height,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 180,
    height: 45,
    resizeMode: 'contain',
    marginTop: 70,
  },
  stamp_wrapper: {
    marginTop: 50,
  },
  buttons_wrapper: {
    position: 'absolute',
    bottom: 60,
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
  },
});
