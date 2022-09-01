import React, { FC } from 'react';
import { useAppForm, useCustomTheme, useNavigation } from '~/hooks/hooks';
import { ButtonAppearance, MainScreenName } from '~/common/enums/enums';
import { MainNavigationProps, VerifyPhone } from '~/common/types/types';
import {
  Input,
  KeyboardAvoiding,
  PrimaryButton,
  View,
} from '~/components/components';
import { images } from '~/assets/images/images';
import { phone } from '~/validation-schemas/validation-schemas';
import { globalStyles } from '~/styles/styles';
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
  const navigation = useNavigation<MainNavigationProps>();
  const { colors } = useCustomTheme();
  const { control, errors, handleSubmit } = useAppForm<VerifyPhone>({
    defaultValues: {
      phone: '+380',
    },
    validationSchema: phone,
  });

  const handleBackButton = (): void => {
    navigation.navigate(MainScreenName.HOME);
  };

  const handleLaterPress = (): void => {
    //TODO add Cancel handler
  };

  const onSubmit = (): void => {
    // TODO: handle submit
  };

  return (
    <Wrapper>
      <Header labelButton="Home" onPress={handleBackButton} />
      <KeyboardAvoiding>
        <Container>
          <VerifyImage
            source={images.verify_phone}
            contentContainerStyle={globalStyles.mt6}
          />
          <Title
            label="Enter Your Phone Number"
            contentContainerStyle={globalStyles.mt6}
          />
          <CustomText
            label="For further verification of account, please enter your phone here or verify it on your Personal Info page."
            contentContainerStyle={globalStyles.mt3}
          />
          <Input
            label="Phone"
            placeholder="+380"
            name="phone"
            control={control}
            errors={errors}
            contentContainerStyle={globalStyles.mt6}
          />
          <ButtonsContainer>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                label="Verify later"
                appearance={ButtonAppearance.TRANSPARENT}
                textColor={colors.text}
                onPress={handleLaterPress}
              />
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton label="Verify" onPress={handleSubmit(onSubmit)} />
            </View>
          </ButtonsContainer>
        </Container>
      </KeyboardAvoiding>
    </Wrapper>
  );
};

export { VerifyPhoneScreen };
