import { useTranslation } from 'next-i18next';
import { ButtonGroup } from '@components/primitives';
import { useAppDispatch, useTypedSelector } from '@hooks';
import type { RootState } from '@types';
import { CheckboxGroup } from './checkbox-group';
import { filterButtons, checkboxes } from './components-data';
import * as styles from './styles';

export const Filter = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { filterStatus } = useTypedSelector((state: RootState) => state.myList);

  return (
    <div css={styles.filterWrapper}>
      <div css={styles.filterComponents}>
        <div css={styles.buttonsWrapper}>
          <ButtonGroup buttons={filterButtons({ t, dispatch })} />
        </div>
        <CheckboxGroup
          checkboxes={checkboxes({ t, dispatch, statusesValue: filterStatus })}
        />
      </div>
    </div>
  );
};
