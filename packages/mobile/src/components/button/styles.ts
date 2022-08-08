import { StyleSheet } from 'react-native';
import { ButtonType } from '~/common/enums/enums';

const styles = StyleSheet.create({
  [ButtonType.MAIN]: {
    paddingVertical: 13,
    paddingHorizontal: 35,
  },
  [ButtonType.SECONDARY]: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  [ButtonType.OUTLINED]: {
    borderWidth: 2,
  },
  button: {
    padding: 13,
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
  },
});

export { styles };
