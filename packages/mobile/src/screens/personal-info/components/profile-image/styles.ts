import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: width / 2,
  },
  flag: {
    height: width / 3,
    borderRadius: 10,
  },
  photoWrapper: {
    position: 'absolute',
    top: 63,
    zIndex: 1,
    alignSelf: 'center',
    width: 130,
    height: 130,
  },
  photoContainer: {
    borderWidth: 2,
    borderColor: '#F5F5F5',
    borderRadius: 65,
    overflow: 'hidden',
    backgroundColor: '#DFDFDF',
  },
  photoButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 2,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
  },
  icon: {
    color: '#2F2F2F',
    opacity: 0.3,
  },
});

export { styles };
