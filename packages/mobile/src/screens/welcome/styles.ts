import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 180,
    height: 45,
    resizeMode: 'contain',
    marginTop: 70,
  },
  stampWrapper: {
    marginTop: 50,
  },
  buttonsWrapper: {
    position: 'absolute',
    bottom: 60,
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
  },
});
