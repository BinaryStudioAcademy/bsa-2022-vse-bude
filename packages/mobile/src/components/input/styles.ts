import { StyleSheet } from 'react-native';
import { FontFamily } from '~/common/enums/enums';

const styles = StyleSheet.create({
  input: {
    paddingVertical: 9,
    paddingLeft: 15,
    paddingRight: 30,
    borderRadius: 10,
    lineHeight: 16,
    borderWidth: 2,
    fontFamily: FontFamily.RALEWAY_REGULAR,
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
  immutableValue: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
});

export { styles };
