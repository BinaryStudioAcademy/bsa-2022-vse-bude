import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    paddingVertical: 9,
    paddingLeft: 15,
    paddingRight: 30,
    borderRadius: 10,
    lineHeight: 16,
    borderWidth: 2,
  },
  label: {
    lineHeight: 14,
  },
  required: {
    marginTop: -4,
  },
  popover: {
    padding: 10,
  },
  popoverIcon: {
    marginLeft: 5,
  },
  eyeIconWrapper: {
    position: 'absolute',
    right: 5,
    height: '100%',
    justifyContent: 'center',
  },
});

export { styles };
