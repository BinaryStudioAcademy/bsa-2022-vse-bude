import { useTranslation } from 'next-i18next';
import { ButtonGroup, Checkbox } from '@components/primitives';
import { filterButtons, checkboxes } from './components-data';
import * as styles from './styles';

export const Filter = () => {
  const { t } = useTranslation();

  return (
    <div css={styles.filterWrapper}>
      <div css={styles.filterComponents}>
        <div css={styles.buttonsWrapper}>
          <ButtonGroup buttons={filterButtons({ t })} />
        </div>
        <div>
          {checkboxes({ t }).map((elemProp, idx) => {
            const { label, value, onChange } = elemProp;

            return (
              <div key={label + idx} css={styles.checkboxContainer}>
                <Checkbox label={label} value={value} onChange={onChange} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
