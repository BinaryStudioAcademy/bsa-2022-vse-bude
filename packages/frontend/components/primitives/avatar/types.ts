export type AvatarProps = {
  firstName?: string;
  lastName?: string;
  image?: string;
  loading?: boolean;
  isLarge?: boolean;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};
