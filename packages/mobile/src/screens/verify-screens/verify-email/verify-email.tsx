import React, { FC } from 'react';
import {
  useAppForm,
  useAppSelector,
  useCustomTheme,
  useNavigation,
  useTranslation,
  useAppDispatch,
} from '~/hooks/hooks';
import {
  ButtonAppearance,
  DataStatus,
  MainScreenName,
  RootScreenName,
} from '~/common/enums/enums';
import {
  PropsVerifyScreens,
  RootNavigationProps,
  VerifyEmailRequestDto,
} from '~/common/types/types';
import {
  Input,
  KeyboardAvoiding,
  PrimaryButton,
  View,
} from '~/components/components';
import { images } from '~/assets/images/images';
import { globalStyles } from '~/styles/styles';
import { selectVerifyDataStatus, selectUserEmail } from '~/store/selectors';
import { verifyActions } from '~/store/actions';
import { notification } from '~/services/services';
import {
  ButtonsContainer,
  CustomText,
  Header,
  Title,
  VerifyImage,
  Wrapper,
} from '../components/components';
import { styles } from './styles';

const VerifyEmailScreen: FC<PropsVerifyScreens> = ({ route }) => {
  const fromSignUp = route.params?.fromSignUp;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<RootNavigationProps>();
  const { colors } = useCustomTheme();
  const userEmail = useAppSelector(selectUserEmail);
  const dataStatus = useAppSelector(selectVerifyDataStatus);
  const isLoading = dataStatus === DataStatus.PENDING;
  const { control, errors, handleSubmit } = useAppForm<VerifyEmailRequestDto>({
    defaultValues: {
      email: userEmail,
    },
  });

  const handleBackButtonPress = (): void => {
    navigation.navigate(RootScreenName.MAIN, { screen: MainScreenName.HOME });
  };

  const handleLaterPress = (): void => {
    navigation.navigate(RootScreenName.MAIN, {
      screen: MainScreenName.ACCOUNT_ROOT,
    });
  };

  const onSubmit = (): void => {
    dispatch(verifyActions.getVerificationCodeEmail())
      .unwrap()
      .then(() => {
        notification.success(t('verify.CODE_SENT'));
        navigation.navigate(RootScreenName.VERIFY_CODE_EMAIL, {
          fromSignUp: Boolean(fromSignUp),
        });
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.warn(err);
      });
  };

  return (
    <Wrapper>
      <Header
        labelButton={t('verify.BACK_HOME')}
        onPress={handleBackButtonPress}
      />
      <KeyboardAvoiding>
        <View style={globalStyles.px5}>
          <VerifyImage
            source={images.verify_phone}
            contentContainerStyle={globalStyles.mt6}
          />
          <Title
            label={t('verify.VERIFY_EMAIL')}
            contentContainerStyle={globalStyles.mt6}
          />
          <CustomText
            label={t('verify.VERIFY_EMAIL_TEXT')}
            contentContainerStyle={globalStyles.mt3}
          />
          <Input
            label={t('verify.INPUT_LABEL_EMAIL')}
            name="email"
            control={control}
            errors={errors}
            contentContainerStyle={globalStyles.mt6}
            editable={false}
          />
          <ButtonsContainer>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                label={t('verify.VERIFY_LATER')}
                appearance={ButtonAppearance.TRANSPARENT}
                textColor={colors.text}
                onPress={handleLaterPress}
                disabled={isLoading}
              />
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                label={t('verify.VERIFY')}
                onPress={handleSubmit(onSubmit)}
                disabled={isLoading}
              />
            </View>
          </ButtonsContainer>
        </View>
      </KeyboardAvoiding>
    </Wrapper>
  );
};

export { VerifyEmailScreen };
