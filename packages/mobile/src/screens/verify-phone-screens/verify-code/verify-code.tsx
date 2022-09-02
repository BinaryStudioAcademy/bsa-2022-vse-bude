import React, { FC } from 'react';
import {
  useAppForm,
  useAppSelector,
  useCustomTheme,
  useNavigation,
  useTranslation,
} from '~/hooks/hooks';
import {
  ButtonAppearance,
  RootScreenName,
  VerifyScreenName,
} from '~/common/enums/enums';
import {
  Input,
  KeyboardAvoiding,
  PrimaryButton,
  View,
} from '~/components/components';
import { images } from '~/assets/images/images';
import { globalStyles } from '~/styles/styles';
import { RootNavigationProps, VerifyCode } from '~/common/types/types';
import { selectUserPhone } from '~/store/selectors';
import {
  ButtonsContainer,
  Container,
  CustomText,
  Header,
  Title,
  VerifyImage,
  Wrapper,
} from '../components/components';
import { styles } from './styles';

const VerifyCodeScreen: FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<RootNavigationProps>();
  const { colors } = useCustomTheme();
  const userPhone = useAppSelector(selectUserPhone);
  const { control, errors, handleSubmit } = useAppForm<VerifyCode>({
    defaultValues: {
      code: '',
    },
  });

  const handleBackButton = (): void => {
    navigation.goBack();
  };

  const handleResendPress = (): void => {
    //TODO add Cancel handler
  };

  const onSubmit = (): void => {
    navigation.navigate(RootScreenName.VERIFY, {
      screen: VerifyScreenName.VERIFIED,
    });
  };

  return (
    <Wrapper>
      <Header
        labelButton={t('verificationPhone.BACK_BUTTON')}
        onPress={handleBackButton}
      />
      <KeyboardAvoiding>
        <Container>
          <VerifyImage
            source={images.verification_code}
            contentContainerStyle={globalStyles.mt6}
          />
          <Title
            label={t('verificationPhone.ENTER_CODE')}
            contentContainerStyle={globalStyles.mt6}
          />
          <CustomText
            label={`${t('verificationPhone.JUST_SENT')} ${userPhone}`}
            contentContainerStyle={globalStyles.mt3}
          />
          <Input
            label={t('verificationPhone.INPUT_LABEL_CODE')}
            placeholder={t('verificationPhone.ENTER_CODE')}
            name="code"
            control={control}
            errors={errors}
            contentContainerStyle={globalStyles.mt6}
          />
          <ButtonsContainer>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                label={t('verificationPhone.RESEND_CODE')}
                appearance={ButtonAppearance.TRANSPARENT}
                textColor={colors.text}
                onPress={handleResendPress}
              />
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                label={t('verificationPhone.CONTINUE')}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </ButtonsContainer>
        </Container>
      </KeyboardAvoiding>
    </Wrapper>
  );
};

export { VerifyCodeScreen };
