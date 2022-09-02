import React, { FC } from 'react';
import {
  useAppForm,
  useAppSelector,
  useCustomTheme,
  useNavigation,
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
      <Header labelButton="Back" onPress={handleBackButton} />
      <KeyboardAvoiding>
        <Container>
          <VerifyImage
            source={images.verification_code}
            contentContainerStyle={globalStyles.mt6}
          />
          <Title
            label="Enter a code"
            contentContainerStyle={globalStyles.mt6}
          />
          <CustomText
            label={`We just sent a code to ${userPhone}`}
            contentContainerStyle={globalStyles.mt3}
          />
          <Input
            label="Enter the verification code we just sent to you"
            placeholder="Enter a code"
            name="code"
            control={control}
            errors={errors}
            contentContainerStyle={globalStyles.mt6}
          />
          <ButtonsContainer>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                label="Resend code"
                appearance={ButtonAppearance.TRANSPARENT}
                textColor={colors.text}
                onPress={handleResendPress}
              />
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                label="Continue"
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
