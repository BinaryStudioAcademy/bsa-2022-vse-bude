import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 250,
    padding: 18,
    borderRadius: 1,
  },
  imgWrapper: {
    alignSelf: 'center',
    width: '100%',
    height: 135,
    borderRadius: 5,
  },
  time: {
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
    width: '70%',
    height: 26,
    textAlign: 'center',
    borderRadius: 50,
    borderWidth: 1,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    marginTop: 20,
  },
  divider: {
    width: '100%',
    height: 2,
    marginVertical: 13,
  },
});

export { styles };
