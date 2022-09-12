import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';
import { useCustomTheme, useMemo } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';

const useStyles = () => {
  const { colors } = useCustomTheme();

  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: '100%',
          height: 201,
          padding: 18,
          borderWidth: 2,
          borderColor: ColorPalette.GRAY_100,
          borderRadius: 5,
        },
        image: {
          width: 104,
          height: 104,
          borderRadius: 5,
        },
        description: {
          marginLeft: 10,
        },
        row: {
          marginTop: 10,
        },
        title: {
          lineHeight: 19,
          color: colors.text,
          ...globalStyles.fs16,
          ...globalStyles.fontWeightBold,
        },
        status: {
          marginLeft: 10,
          lineHeight: 16,
          color: colors.accent,
          ...globalStyles.fs14,
          ...globalStyles.fontWeightSemiBold,
        },
        sellerTitle: {
          lineHeight: 14,
          color: colors.secondarySubtitle,
          ...globalStyles.fs12,
        },
        avatar: {
          width: 26,
          height: 26,
          marginLeft: 10,
          borderRadius: 13,
        },
        sellerName: {
          marginLeft: 5,
          lineHeight: 16.44,
          color: colors.text,
          ...globalStyles.fs14,
        },
        date: {
          width: 104,
          textAlign: 'center',
          lineHeight: 14.09,
          color: colors.secondarySubtitle,
          ...globalStyles.fs12,
        },
        organization: {
          width: 169,
          height: 32,
          marginLeft: 10,
          resizeMode: 'contain',
        },
        boxShadow: {
          shadowColor: ColorPalette.GRAY_100,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.04,
          shadowRadius: 1,
          elevation: 2,
        },
      }),
    [colors],
  );
};

export { useStyles };
