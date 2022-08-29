import { Button, Avatar, Icon, Anchor } from '@primitives';
import { IconName, Routes } from '@enums';
import { ColorPalette } from '@vse-bude/shared';
import type { AuthorDto } from '@vse-bude/shared';
import Router from 'next/router';
import { useTranslation } from 'next-i18next';
import * as styles from './styles';

interface SellerInfoProps {
  seller: AuthorDto;
  onContactSeller: () => void;
}

export const SellerInfo = ({ seller, onContactSeller }: SellerInfoProps) => {
  const { t } = useTranslation('item');
  const handleAvatarClick = () => {
    Router.push(`${Routes.PROFILE}/${seller.id}`);
  };

  return (
    <div css={styles.sellerInfoWrapper}>
      <div css={styles.title}>
        <h6>{t('sellerCaption')}</h6>
        <Button
          variant="outlined"
          size="small"
          width="180"
          onClick={onContactSeller}
        >
          <span css={styles.contactSeller}>{t('contactSellerBtn')}</span>
        </Button>
      </div>
      <div css={styles.seller}>
        <Avatar
          firstName={seller.firstName}
          lastName={seller.lastName}
          image={seller.avatar}
          handleClick={handleAvatarClick}
        />
        <span>{seller.firstName + ' ' + seller.lastName}</span>
      </div>
      <div css={styles.contacts}>
        <div css={styles.phone}>
          <Icon
            size="sm"
            icon={IconName.PHONE}
            color={ColorPalette.YELLOW_200}
          />
          <span>{seller.phone}</span>
        </div>

        {seller.socialMedia.map((social) => (
          <div key={social.id}>
            <Anchor href={social.link}>
              <Icon
                size="sm"
                icon={IconName[social.socialMedia]}
                color={ColorPalette.YELLOW_200}
              ></Icon>
            </Anchor>
          </div>
        ))}
        {/* for ui tests: delete soon*/}
        <div>
          <Anchor>
            <Icon
              size="sm"
              icon={IconName.FACEBOOK}
              color={ColorPalette.YELLOW_200}
            />
          </Anchor>
        </div>
        <div>
          <Anchor>
            <Icon
              size="sm"
              icon={IconName.WEBSITE}
              color={ColorPalette.YELLOW_200}
            />
          </Anchor>
        </div>
        <div>
          <Anchor>
            <Icon
              size="sm"
              icon={IconName.LINKEDIN}
              color={ColorPalette.YELLOW_200}
            />
          </Anchor>
        </div>
      </div>
    </div>
  );
};
