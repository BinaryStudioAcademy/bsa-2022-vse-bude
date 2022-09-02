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
  MainScreenName,
  RootScreenName,
  VerifyScreenName,
} from '~/common/enums/enums';
import { RootNavigationProps, VerifyPhone } from '~/common/types/types';
import {
  Input,
  KeyboardAvoiding,
  PrimaryButton,
  View,
} from '~/components/components';
import { images } from '~/assets/images/images';
import { phone } from '~/validation-schemas/validation-schemas';
import { globalStyles } from '~/styles/styles';
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

const VerifyPhoneScreen: FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<RootNavigationProps>();
  const { colors } = useCustomTheme();
  const userPhone = useAppSelector(selectUserPhone);
  const { control, errors, handleSubmit } = useAppForm<VerifyPhone>({
    defaultValues: {
      phone: userPhone,
    },
    validationSchema: phone,
  });

  const handleBackButton = (): void => {
    navigation.navigate(RootScreenName.MAIN, { screen: MainScreenName.HOME });
  };

  const handleLaterPress = (): void => {
    navigation.navigate(RootScreenName.PERSONAL_INFO);
  };

  const onSubmit = (): void => {
    navigation.navigate(RootScreenName.VERIFY, {
      screen: VerifyScreenName.VERIFY_CODE,
    });
  };

  return (
    <Wrapper>
      <Header
        labelButton={t('verificationPhone.BACK_HOME')}
        onPress={handleBackButton}
      />
      <KeyboardAvoiding>
        <Container>
          <VerifyImage
            source={images.verify_phone}
            contentContainerStyle={globalStyles.mt6}
          />
          <Title
            label={t('verificationPhone.ENTER_NUMBER')}
            contentContainerStyle={globalStyles.mt6}
          />
          <CustomText
            label={t('verificationPhone.PLEASE_ENTER')}
            contentContainerStyle={globalStyles.mt3}
          />
          <Input
            label={t('verificationPhone.INPUT_LABEL_PHONE')}
            placeholder="+380"
            name="phone"
            control={control}
            errors={errors}
            contentContainerStyle={globalStyles.mt6}
          />
          <ButtonsContainer>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                label={t('verificationPhone.VERIFY_LATER')}
                appearance={ButtonAppearance.TRANSPARENT}
                textColor={colors.text}
                onPress={handleLaterPress}
              />
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                label={t('verificationPhone.VERIFY')}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </ButtonsContainer>
        </Container>
      </KeyboardAvoiding>
    </Wrapper>
  );
};

export { VerifyPhoneScreen };
