export interface InnerLinkProps {
  variant: 'innerLink';
  href: string;
  label: string;
  disabled?: boolean;
  title?: string;
  as?: string;
  passHref?: boolean;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  locale?: string | false | undefined;
}

export interface AnchorProps extends HTMLAnchorElement {
  label: string;
  variant: 'anchorLink';
  disabled: boolean;
}
