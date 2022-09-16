import { IconColor, IconName, Routes } from '@enums';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { updateNotificationView } from '@store';
import type { NotificationDto } from '@vse-bude/shared';
import dayjs from 'dayjs';
import { Flex } from 'grapefruit-ui';
import { useRouter } from 'next/router';
import { IconButton } from '../icon-button';
import { Loader } from '../loader';
import * as styles from './styles';

export const Notification = ({
  notificationData,
}: {
  notificationData: NotificationDto;
}) => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const { updateViewLoading } = useTypedSelector((state) => state.profile);
  const { title, createdAt, description, id, productId, userId, viewed } =
    notificationData;

  return (
    <div css={styles.wrapper}>
      <div css={styles.titleWrapper}>
        <h5 css={styles.title}> {title} </h5>

        <div css={styles.viewBtn}>
          {updateViewLoading ? (
            <Loader size="extraSmall" />
          ) : (
            <>
              {viewed ? (
                <IconButton
                  ariaLabel="viewed"
                  icon={IconName.CHECK}
                  color={IconColor.YELLOW}
                />
              ) : (
                <IconButton
                  ariaLabel="remove"
                  icon={IconName.XMARK}
                  color={IconColor.GRAY}
                  onClick={() => dispatch(updateNotificationView(id))}
                />
              )}
            </>
          )}
        </div>
      </div>
      <p css={styles.description}>{description}</p>
      <Flex justify={'space-between'} align={'center'}>
        <Flex>
          {userId && (
            <IconButton
              ariaLabel="user info"
              icon={IconName.USER}
              color={IconColor.GRAY}
              onClick={() => push(`${Routes.PROFILE}/${userId}`)}
            />
          )}
          {productId && (
            <IconButton
              ariaLabel="go to product"
              icon={IconName.SHOPPING_BAG}
              color={IconColor.GRAY}
              onClick={() => push(`${Routes.ITEMS}/${productId}`)}
            />
          )}
        </Flex>
        <span css={styles.time}>{` ${dayjs(createdAt).hour()}:${dayjs(
          createdAt,
        ).minute()} ${dayjs(createdAt).month()}.${dayjs(
          createdAt,
        ).day()}.${dayjs(createdAt).year()}`}</span>
      </Flex>
    </div>
  );
};
