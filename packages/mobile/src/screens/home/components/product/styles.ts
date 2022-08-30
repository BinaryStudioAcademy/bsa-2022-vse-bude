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
