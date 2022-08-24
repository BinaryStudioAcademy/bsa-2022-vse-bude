export type AvatarProps = {
  firstName?: string;
  lastName?: string;
  image?: string;
  loading?: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};
