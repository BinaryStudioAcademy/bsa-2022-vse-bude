import React, { FC } from 'react';
import { EmailVerifyDto } from '@vse-bude/shared';
import {
  useAppDispatch,
  useAppForm,
  useAppSelector,
  useCustomTheme,
  useNavigation,
  useTranslation,
} from '~/hooks/hooks';
import {
  ButtonAppearance,
  DataStatus,
  RootScreenName,
} from '~/common/enums/enums';
import {
  Input,
  KeyboardAvoiding,
  PrimaryButton,
  View,
} from '~/components/components';
import { verifyActions } from '~/store/actions';
import { images } from '~/assets/images/images';
import { globalStyles } from '~/styles/styles';
import { RootNavigationProps } from '~/common/types/types';
import {
  selectAuthDataStatus,
  selectVerifyDataStatus,
  selectUserEmail,
} from '~/store/selectors';
import { notification } from '~/services/services';
import { codeSchema } from '~/validation-schemas/validation-schemas';
import { ButtonsContainer, Header } from '~/screens/components/components';
import {
  CustomText,
  Title,
  VerifyImage,
  Wrapper,
} from '../components/components';
import { styles } from './styles';

const VerifyCodeEmailScreen: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<RootNavigationProps>();
  const { colors } = useCustomTheme();
  const userEmail = useAppSelector(selectUserEmail);
  const dataStatusVerify = useAppSelector(selectVerifyDataStatus);
  const dataStatusAuth = useAppSelector(selectAuthDataStatus);
  const isLoading = [dataStatusVerify, dataStatusAuth].includes(
    DataStatus.PENDING,
  );
  const { control, errors, handleSubmit } = useAppForm<EmailVerifyDto>({
    defaultValues: {
      code: '',
    },
    validationSchema: codeSchema,
  });

  const handleBackButtonPress = (): void => {
    navigation.goBack();
  };

  const handleResendPress = (): void => {
    dispatch(verifyActions.getVerificationCodeEmail())
      .unwrap()
      .then(() => {
        notification.success(t('verify.CODE_SENT'));
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.warn(err);
      });
  };

  const onSubmit = (payload: EmailVerifyDto): void => {
    dispatch(verifyActions.verifyEmail(payload))
      .unwrap()
      .then(() => {
        navigation.navigate(RootScreenName.VERIFIED_EMAIL);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.warn(err);
      });
  };

  return (
    <Wrapper>
      <Header
        title={t('verify.VERIFY')}
        labelButton={t('verify.BACK_BUTTON')}
        onPress={handleBackButtonPress}
      />
      <KeyboardAvoiding>
        <View style={globalStyles.px5}>
          <VerifyImage
            source={images.verification_code}
            contentContainerStyle={globalStyles.mt6}
          />
          <Title
            label={t('verify.ENTER_CODE')}
            contentContainerStyle={globalStyles.mt6}
          />
          <CustomText
            label={`${t('verify.JUST_SENT')} ${userEmail}`}
            contentContainerStyle={globalStyles.mt3}
          />
          <View>
            <Input
              label={t('verify.INPUT_LABEL_CODE')}
              placeholder={t('verify.ENTER_CODE')}
              name="code"
              control={control}
              errors={errors}
              contentContainerStyle={globalStyles.mt6}
            />
            {/* {!errors?.code && (
              <CheckCircleIcon
                style={styles.icon}
                size={20}
                color={colors.accent}
              />
            )} */}
          </View>
          <ButtonsContainer>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                label={t('verify.RESEND_CODE')}
                appearance={ButtonAppearance.TRANSPARENT}
                textColor={colors.text}
                onPress={handleResendPress}
                disabled={isLoading}
              />
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                label={t('verify.CONTINUE')}
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

export { VerifyCodeEmailScreen };
