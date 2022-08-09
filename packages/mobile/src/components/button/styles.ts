import { StyleSheet } from 'react-native';
import { ButtonType, ButtonView } from '~/common/enums/enums';

//mock before update global theme color
enum AppColor {
  YELLOW_100 = '#F1B313',
  YELLOW_200 = '#FFB800',
  GRAY_200 = '#DFDFDF',
  WHITE = '#FFFFFF',
}
////

const styles = StyleSheet.create({
  [ButtonType.PRIMARY]: {
    paddingVertical: 13,
    paddingHorizontal: 35,
  },
  [ButtonType.SECONDARY]: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  [ButtonView.OUTLINED]: {
    borderWidth: 2,
    backgroundColor: AppColor.WHITE,
    borderColor: AppColor.YELLOW_100,
  },
  [ButtonView.FILLED]: {
    backgroundColor: AppColor.YELLOW_100,
  },
  disabledFill: {
    backgroundColor: AppColor.GRAY_200,
    borderColor: AppColor.GRAY_200,
  },
  disabledOutlained: {
    backgroundColor: AppColor.WHITE,
    borderColor: AppColor.GRAY_200,
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
  outlainedTitle: {
    color: AppColor.YELLOW_100,
  },
  filledTitle: {
    color: AppColor.WHITE,
  },
  disabledOutlainedTitle: {
    color: AppColor.GRAY_200,
  },
});

export { styles };
