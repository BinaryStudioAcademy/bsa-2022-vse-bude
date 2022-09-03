import { Button, Avatar, Icon, Anchor } from '@primitives';
import { IconColor, IconName, Routes } from '@enums';
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
          <Icon size="md" icon={IconName.PHONE} color={IconColor.YELLOW} />
          <div css={styles.sellerInfoLink}>{seller.phone}</div>
        </div>
        {seller.socialMedia.map((social) => (
          <div key={social.id}>
            <Anchor href={social.link}>
              <Icon
                size="md"
                icon={IconName[social.socialMedia]}
                color={IconColor.YELLOW}
              />
              <div css={styles.sellerInfoLink}>{social.socialMedia}</div>
            </Anchor>
          </div>
        ))}
      </div>
    </div>
  );
};
