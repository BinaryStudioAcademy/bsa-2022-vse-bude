import React, { FC, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { DrawerItem } from '@react-navigation/drawer';
import Color from 'color';

import { ColorPalette } from '@vse-bude/shared';
import { notification } from '~/services/services';
import { GlobeIcon } from '~/components/components';
import { categories as categoriesActions } from '~/store/actions';
import { useAppDispatch } from '~/hooks/hooks';

const i18DayjsLanguagesMap = new Map<string, string>([
  ['en', 'en'],
  ['ua', 'uk'],
]);

const LanguageButtons: FC = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const [buttonsVisible, setButtonsVisible] = useState<boolean>(false);

  const handleChangeLanguage = (i18Lang: string) => {
    i18n.changeLanguage(i18Lang, (err) => {
      if (err) {
        notification.error(err);

        return;
      }

      dayjs.locale(i18DayjsLanguagesMap.get(i18Lang));
      dispatch(categoriesActions.loadAllCategories());
    });
  };

  const languageButtonsData = useMemo(
    () => [
      { code: 'ua', name: t('common:common.UKRAINIAN') },
      { code: 'en', name: t('common:common.ENGLISH') },
    ],
    [t],
  );

  return (
    <>
      <DrawerItem
        icon={GlobeIcon}
        label={t('common:common.LANGUAGE')}
        onPress={() => {
          setButtonsVisible((current) => !current);
        }}
        pressColor={Color(ColorPalette.YELLOW_100).alpha(0.1).rgb().string()}
      />
      <>
        {buttonsVisible &&
          languageButtonsData.map(({ code, name }) => {
            const isSelected = i18n.resolvedLanguage === code;

            return (
              <DrawerItem
                label={name}
                inactiveTintColor={
                  isSelected ? ColorPalette.YELLOW_100 : undefined
                }
                onPress={() => {
                  if (!isSelected) {
                    handleChangeLanguage(code);
                  }
                }}
                pressColor={Color(ColorPalette.YELLOW_100)
                  .alpha(0.1)
                  .rgb()
                  .string()}
              />
            );
          })}
      </>
    </>
  );
};

export { LanguageButtons };
