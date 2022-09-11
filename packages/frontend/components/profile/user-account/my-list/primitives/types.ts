export type ProfileLinkProps = {
  userStatus: string;
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
};

export type DateProps = {
  size?: 'lg';
  time: Date | string;
};

export type FilterArrowProps = {
  isOpen: boolean;
  onClick?: () => void;
};
