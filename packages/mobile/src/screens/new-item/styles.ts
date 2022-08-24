import { StyleSheet } from 'react-native';

const createStyles = () => {
  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      width: '100%',
      alignContent: 'flex-end',
    },
    tooltipWrap: {
      flexDirection: 'row',
    },
    popover: {
      padding: 10,
    },
    phoneWrap: {
      width: '60%',
      flexDirection: 'row',
      paddingRight: 10,
      marginBottom: 0,
      zIndex: 10,
    },
    phone: {
      marginTop: -15,
      width: '60%',
      paddingRight: 10,
    },
    currencyWrap: {
      width: '40%',
    },
    currency: {
      top: 0,
      width: '40%',
      marginTop: -10,
    },
    tooltipIcon: {
      marginLeft: 5,
    },
  });

  return styles;
};
export { createStyles };
