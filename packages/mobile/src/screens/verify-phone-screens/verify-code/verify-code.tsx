import React, { FC } from 'react';
import { useAppForm, useCustomTheme, useNavigation } from '~/hooks/hooks';
import { ButtonAppearance } from '~/common/enums/enums';
import {
  Input,
  KeyboardAvoiding,
  PrimaryButton,
  View,
} from '~/components/components';
import { images } from '~/assets/images/images';
import { globalStyles } from '~/styles/styles';
import { VerifyCode } from '~/common/types/types';
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
  const navigation = useNavigation();
  const { colors } = useCustomTheme();
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
    // TODO: handle submit
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
            label="We just sent a code to +380999999999"
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
