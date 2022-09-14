import React, { FC } from 'react';
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
  MainScreenName,
  RootScreenName,
} from '~/common/enums/enums';
import {
  RootNavigationProps,
  VerifyPhoneRequestDto,
} from '~/common/types/types';
import {
  Input,
  KeyboardAvoiding,
  PrimaryButton,
  View,
} from '~/components/components';
import { verifyActions } from '~/store/actions';
import { images } from '~/assets/images/images';
import { phone } from '~/validation-schemas/validation-schemas';
import { globalStyles } from '~/styles/styles';
import { selectVerifyDataStatus, selectUserPhone } from '~/store/selectors';
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

const VerifyPhoneScreen: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<RootNavigationProps>();
  const { colors } = useCustomTheme();
  const userPhone = useAppSelector(selectUserPhone);
  const dataStatus = useAppSelector(selectVerifyDataStatus);
  const isLoading = dataStatus === DataStatus.PENDING;
  const { control, errors, handleSubmit } = useAppForm<VerifyPhoneRequestDto>({
    defaultValues: {
      phone: userPhone,
    },
    validationSchema: phone,
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
    dispatch(verifyActions.getVerificationCodePhone())
      .unwrap()
      .then(() => {
        notification.success(t('verify.CODE_SENT'));
        navigation.navigate(RootScreenName.VERIFY_CODE_PHONE);
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
            label={t('verify.ENTER_NUMBER')}
            contentContainerStyle={globalStyles.mt6}
          />
          <CustomText
            label={t('verify.PLEASE_ENTER')}
            contentContainerStyle={globalStyles.mt3}
          />
          <Input
            label={t('verify.INPUT_LABEL_PHONE')}
            placeholder="+380"
            name="phone"
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

export { VerifyPhoneScreen };
