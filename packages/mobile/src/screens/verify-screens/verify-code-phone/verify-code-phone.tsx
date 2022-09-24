import React, { FC } from 'react';
import { PhoneVerifyDto } from '@vse-bude/shared';
import {
  useAppDispatch,
  useAppForm,
  useAppSelector,
  useCustomTheme,
  useNavigation,
  useTranslation,
  useEffect,
  useState,
} from '~/hooks/hooks';
import {
  ButtonAppearance,
  DataStatus,
  RootScreenName,
} from '~/common/enums/enums';
import {
  CheckCircleIcon,
  Input,
  KeyboardAvoiding,
  PrimaryButton,
  View,
} from '~/components/components';
import { verifyActions } from '~/store/actions';
import { images } from '~/assets/images/images';
import { globalStyles } from '~/styles/styles';
import { PropsVerifyScreens, RootNavigationProps } from '~/common/types/types';
import {
  selectAuthDataStatus,
  selectVerifyDataStatus,
  selectUserPhone,
} from '~/store/selectors';
import { notification } from '~/services/services';
import { getCodeSchema } from '~/validation-schemas/validation-schemas';
import { ButtonsContainer, Header } from '~/screens/components/components';
import { VERIFICATION_CODE_REGEX } from '~/common/regexp/regexp';
import {
  CustomText,
  Title,
  VerifyImage,
  Wrapper,
} from '../components/components';
import { styles } from './styles';

const VerifyCodePhoneScreen: FC<PropsVerifyScreens> = ({ route }) => {
  const fromSignUp = route.params?.fromSignUp;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<RootNavigationProps>();
  const { colors } = useCustomTheme();
  const userPhone = useAppSelector(selectUserPhone);
  const dataStatusVerify = useAppSelector(selectVerifyDataStatus);
  const dataStatusAuth = useAppSelector(selectAuthDataStatus);
  const isLoading = [dataStatusVerify, dataStatusAuth].includes(
    DataStatus.PENDING,
  );
  const { control, errors, handleSubmit, watch } = useAppForm<PhoneVerifyDto>({
    defaultValues: {
      code: '',
    },
    validationSchema: getCodeSchema(t),
  });
  const [isCorrectCode, setIsCorrectCode] = useState(false);

  useEffect(() => {
    const subscription = watch((value) => {
      setIsCorrectCode(Boolean(value?.code?.match(VERIFICATION_CODE_REGEX)));
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const handleBackButtonPress = (): void => {
    navigation.goBack();
  };

  const handleResendPress = (): void => {
    dispatch(verifyActions.getVerificationCodePhone())
      .unwrap()
      .then(() => {
        notification.success(t('verify.CODE_SENT'));
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.warn(err);
      });
  };

  const onSubmit = (payload: PhoneVerifyDto): void => {
    dispatch(verifyActions.verifyPhone(payload))
      .unwrap()
      .then(() => {
        navigation.navigate(RootScreenName.VERIFIED_PHONE, {
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
            label={`${t('verify.JUST_SENT')} ${userPhone}`}
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
            {isCorrectCode && (
              <CheckCircleIcon
                style={styles.icon}
                size={20}
                color={colors.accent}
              />
            )}
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

export { VerifyCodePhoneScreen };
