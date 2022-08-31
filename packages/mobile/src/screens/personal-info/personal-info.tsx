import React, { FC } from 'react';
import { useAppDispatch, useAppSelector, useFocusEffect } from '~/hooks/hooks';
import { selectPersonalInfo, selectUserId } from '~/store/selectors';
import { ScreenWrapper, ScrollView, Spinner } from '~/components/components';
import { personalInfo as personalInfoActions } from '~/store/actions';
import { globalStyles } from '~/styles/styles';
import { ProfileImage, PersonalInfoForm } from './components/components';

const PersonalInfoScreen: FC = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);
  const personalInfo = useAppSelector(selectPersonalInfo);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(personalInfoActions.getPersonalInfo(userId as string));
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
