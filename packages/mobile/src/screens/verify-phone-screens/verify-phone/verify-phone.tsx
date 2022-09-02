import React, { FC } from 'react';
import {
  useAppForm,
  useAppSelector,
  useCustomTheme,
  useNavigation,
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
