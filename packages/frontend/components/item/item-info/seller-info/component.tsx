import { Avatar, Icon, Anchor } from '@primitives';
import { IconColor, IconName, Routes } from '@enums';
import type { UserProfileDto } from '@vse-bude/shared';
import Router from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import * as styles from './styles';

interface SellerInfoProps {
  seller: UserProfileDto;
  onContactSeller: () => void;
}

export const SellerInfo = ({ seller }: SellerInfoProps) => {
  const { t } = useTranslation('item');
  const handleAvatarClick = () => {
    Router.push(`${Routes.PROFILE}/${seller.id}`);
  };

  return (
    <div css={styles.sellerInfoWrapper}>
      <div css={styles.title}>
        <h6>{t('sellerCaption')}</h6>
        {/* <Button
          variant="outlined"
          size="small"
          width="180"
          onClick={onContactSeller}
        >
          <span css={styles.contactSeller}>{t('contactSellerBtn')}</span>
        </Button> */}
      </div>
      <div css={styles.seller}>
        <Avatar
          firstName={seller.firstName}
          lastName={seller.lastName}
          image={seller.avatar}
          handleClick={handleAvatarClick}
        />
        <Link prefetch={false} href={`${Routes.PROFILE}/${seller.id}`} passHref>
          <span>{seller.firstName + ' ' + seller.lastName}</span>
        </Link>
      </div>
      <div css={styles.contacts}>
        {seller.phone && (
          <div css={styles.phone}>
            <Icon size="md" icon={IconName.PHONE} color={IconColor.YELLOW} />
            <a css={styles.sellerSocialLink} href={`tel:${seller.phone}`}>
              {seller.phone}
            </a>
          </div>
        )}
        {seller.socialMedia.map((social) => (
          <div key={social.id}>
            <Anchor href={social.link}>
              <Icon
                size="md"
                icon={IconName[social.socialMedia]}
                color={IconColor.YELLOW}
              />
              <div css={styles.sellerSocialLink}>{social.socialMedia}</div>
            </Anchor>
          </div>
        ))}
      </div>
    </div>
  );
};
