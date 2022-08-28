import { StyleSheet } from 'react-native';
import { useCustomTheme, useMemo } from '~/hooks/hooks';

const useStyles = () => {
  const { dark, colors } = useCustomTheme();

  return useMemo(
    () =>
      StyleSheet.create({
        row: {
          flexDirection: 'row',
          width: '100%',
          alignContent: 'flex-end',
        },
        title: {
          color: colors.subtitle,
        },
        tooltipWrap: {
          flexDirection: 'row',
        },
        popover: {
          padding: 10,
        },
        leftWrap: {
          width: '60%',
          flexDirection: 'row',
          paddingRight: 10,
          marginBottom: 0,
          zIndex: 5,
        },
        leftInput: {
          marginTop: -15,
          width: '60%',
          paddingRight: 10,
        },
        rightWrap: {
          width: '40%',
        },
        rightInput: {
          top: 0,
          width: '40%',
          marginTop: -10,
        },
        tooltipIcon: {
          marginLeft: 5,
        },
      }),
    [dark, colors],
  );
};

export { useStyles };
