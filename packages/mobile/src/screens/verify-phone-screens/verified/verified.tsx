import React, { FC } from 'react';
import { useCustomTheme, useNavigation } from '~/hooks/hooks';
import {
  ArrowRightIcon,
  KeyboardAvoiding,
  PrimaryButton,
  View,
} from '~/components/components';
import { images } from '~/assets/images/images';
import { globalStyles } from '~/styles/styles';
import { RootNavigationProps } from '~/common/types/types';
import { RootScreenName } from '~/common/enums/enums';
import {
  Container,
  Header,
  Title,
  VerifyImage,
  Wrapper,
} from '../components/components';
import { styles } from './styles';

const VerifiedScreen: FC = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const { colors } = useCustomTheme();

  const handleContinuePress = (): void => {
    navigation.navigate(RootScreenName.PERSONAL_INFO);
  };

  return (
    <Wrapper>
      <Header hideButton />
      <KeyboardAvoiding>
        <Container>
          <VerifyImage
            source={images.verified}
            contentContainerStyle={globalStyles.mt6}
          />
          <Title
            label="Your account has fully been verified"
            contentContainerStyle={{ ...globalStyles.mt6, marginTop: 75 }}
            contentStyle={{ textAlign: 'center' }}
          />
          <View style={styles.buttonContainer}>
            <PrimaryButton
              label="Continue"
              onPress={handleContinuePress}
              iconRight={<ArrowRightIcon size={24} color={colors.whiteColor} />}
            />
          </View>
        </Container>
      </KeyboardAvoiding>
    </Wrapper>
  );
};

export { VerifiedScreen };
