import React, { FC } from 'react';
import {
  useAppDispatch,
  useAppSelector,
  useFocusEffect,
  useCallback,
} from '~/hooks/hooks';
import { selectPersonalInfo } from '~/store/selectors';
import { ScreenWrapper, ScrollView, Spinner } from '~/components/components';
import { personalInfoActions } from '~/store/actions';
import { globalStyles } from '~/styles/styles';
import { ProfileImage, PersonalInfoForm } from './components/components';

const PersonalInfoScreen: FC = () => {
  const dispatch = useAppDispatch();
  const personalInfo = useAppSelector(selectPersonalInfo);

  useFocusEffect(
    useCallback(() => {
      dispatch(personalInfoActions.getPersonalInfo());
    }, [dispatch]),
  );

  if (!personalInfo) {
    return <Spinner isOverflow />;
  }

  return (
    <ScreenWrapper>
      <ProfileImage avatar={personalInfo?.avatar} />
      <ScrollView style={[globalStyles.flex1, globalStyles.px5]}>
        {personalInfo && <PersonalInfoForm personalInfo={personalInfo} />}
      </ScrollView>
    </ScreenWrapper>
  );
};

export { PersonalInfoScreen };
