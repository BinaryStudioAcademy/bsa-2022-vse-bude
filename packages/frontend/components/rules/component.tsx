import { Container, Icon } from '@primitives';
import type { TFunction } from 'next-i18next';
import { useTranslation } from 'next-i18next';
import { ua } from 'public/locales/ua';
import { IconColor, IconName } from '@enums';
import type { ListTypes } from './types';
import * as styles from './styles';

const { generalRules } = ua.rules;

const renderList = (t: TFunction, key: ListTypes) => (
  <ul css={styles.list}>
    {Object.keys(generalRules.paragraphs[key]?.list).map((item) => (
      <li css={styles.listItem} key={item}>
        <Icon
          size="xs"
          cssExtend={styles.listIcon}
          color={IconColor.YELLOW}
          icon={IconName.ANGLE_RIGHT}
        />
        <span css={styles.text}>
          {t(`rules:generalRules.paragraphs.${key}.list.${item}`) as string}
        </span>
      </li>
    ))}
  </ul>
);

export const RulesPageInner = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h2 css={styles.title}>{t('rules:generalRules.title')}</h2>
      <div>
        <p css={styles.text}>{t('rules:generalRules.paragraphs.main.first')}</p>
        <p css={styles.text}>
          {t('rules:generalRules.paragraphs.main.second')}
        </p>
      </div>
      <div>
        <h3 css={styles.headline}>{t('rules:generalRules.headline.forWho')}</h3>
        <p css={styles.text}>
          {t('rules:generalRules.paragraphs.forWho.first')}
        </p>
        <p css={styles.text}>
          {t('rules:generalRules.paragraphs.forWho.second')}
        </p>
      </div>
      <div>
        <h3 css={styles.headline}>
          {t('rules:generalRules.headline.whatWeGet')}
        </h3>
        {renderList(t, 'whatWeGet')}
        <p css={styles.text}>
          {t('rules:generalRules.paragraphs.whatWeGet.first')}
        </p>
      </div>
      <div>
        <h3 css={styles.headline}>{t('rules:generalRules.headline.cookie')}</h3>
        <p css={styles.text}>
          {t('rules:generalRules.paragraphs.cookie.first')}
        </p>
      </div>
      <div>
        <h3 css={styles.headline}>{t('rules:generalRules.headline.why')}</h3>
        <p css={styles.text}>{t('rules:generalRules.paragraphs.why.first')}</p>
        {renderList(t, 'why')}
      </div>
      <div>
        <h3 css={styles.headline}>
          {t('rules:generalRules.headline.howWeSave')}
        </h3>
        <p css={styles.text}>
          {t('rules:generalRules.paragraphs.howWeSave.first')}
        </p>
        <p css={styles.text}>
          {t('rules:generalRules.paragraphs.howWeSave.second')}
        </p>
        <p css={styles.text}>
          {t('rules:generalRules.paragraphs.howWeSave.third')}
        </p>
      </div>
      <div>
        <h3 css={styles.headline}>
          {t('rules:generalRules.headline.thirdParties')}
        </h3>
        <p css={styles.text}>
          {t('rules:generalRules.paragraphs.thirdParties.first')}
        </p>
        <p css={styles.text}>
          {t('rules:generalRules.paragraphs.thirdParties.second')}
        </p>
        {renderList(t, 'thirdParties')}
      </div>
      <div>
        <h3 css={styles.headline}>
          {t('rules:generalRules.headline.yourRights')}
        </h3>
        <p css={styles.text}>
          {t('rules:generalRules.paragraphs.yourRights.first')}
        </p>
        <p css={styles.text}>
          {t('rules:generalRules.paragraphs.yourRights.second')}
          <span>vsebude.team@gmail.com</span>
        </p>
        {renderList(t, 'yourRights')}
      </div>
      <div>
        <h3 css={styles.headline}>
          {t('rules:generalRules.headline.emailMessages')}
        </h3>
        <p css={styles.text}>
          {t('rules:generalRules.paragraphs.emailMessages.first')}
          <span>vsebude.team@gmail.com</span>
        </p>
      </div>
      <div>
        <h3 css={styles.headline}>
          {t('rules:generalRules.headline.rulesChanges')}
        </h3>
        <p css={styles.text}>
          {t('rules:generalRules.paragraphs.rulesChanges.first')}
        </p>
        <p css={styles.text}>
          {t('rules:generalRules.paragraphs.rulesChanges.second')}
        </p>
      </div>
      <div css={styles.lastWrapper}>
        <h3 css={styles.headline}>
          {t('rules:generalRules.headline.otherConditions')}
        </h3>
        <p css={styles.text}>
          {t('rules:generalRules.paragraphs.otherConditions.first')}
        </p>
        <p css={styles.updatedAt}>
          {t('rules:generalRules.updatedAt')}
          <span>21.09.2022</span>
        </p>
      </div>
    </Container>
  );
};
