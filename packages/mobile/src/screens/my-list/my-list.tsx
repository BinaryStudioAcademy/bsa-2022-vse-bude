import React, { FC } from 'react';
import { RootScreenName } from '~/common/enums/enums';
import { RootNavigationProps } from '~/common/types/types';
import {
  Text,
  ScreenWrapper,
  TouchableOpacity,
  PlusIcon,
} from '~/components/components';
import {
  useAppSelector,
  useCustomTheme,
  useNavigation,
  useTranslation,
  useMemo,
} from '~/hooks/hooks';
import { selectCurrentUser } from '~/store/selectors';
import { createStyles } from './styles';

const MyList: FC = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const { t } = useTranslation();
  const { dark, colors } = useCustomTheme();
  const user = useAppSelector(selectCurrentUser);

  const styles = useMemo(() => createStyles(colors), [dark, colors]);
  const handleCreateNewItemPress = () => {
    navigation.navigate(RootScreenName.NEW_ITEM);
  };

  return (
    <ScreenWrapper style={styles.screen}>
      <Text>My list screen</Text>
      {user && (
        <TouchableOpacity onPress={handleCreateNewItemPress} style={styles.row}>
          <PlusIcon size={30} style={styles.icon} />
          <Text style={styles.btnText}>{t('make_a_post.TITLE')}</Text>
        </TouchableOpacity>
      )}
    </ScreenWrapper>
  );
};

export { MyList };
