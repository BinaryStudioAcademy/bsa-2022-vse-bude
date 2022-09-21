import React, { FC } from 'react';
import {
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  Pressable,
  Text,
} from '~/components/components';
import { ColorPalette, SocialMediaType } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type SocialButtonProps = {
  type: string;
  link: string;
};

const SocialButton: FC<SocialButtonProps> = ({ type, link }) => {
  return (
    <Pressable
      style={[
        globalStyles.alignItemsCenter,
        globalStyles.flexDirectionRow,
        globalStyles.mt1,
        globalStyles.mb3,
      ]}
    >
      {type == SocialMediaType.FACEBOOK ? (
        <FacebookIcon size={15} color={ColorPalette.YELLOW_200} />
      ) : type == SocialMediaType.INSTAGRAM ? (
        <InstagramIcon size={15} color={ColorPalette.YELLOW_200} />
      ) : type == SocialMediaType.LINKEDIN ? (
        <LinkedinIcon size={15} color={ColorPalette.YELLOW_200} />
      ) : (
        <GlobeIcon size={15} color={ColorPalette.YELLOW_200} />
      )}
      <Text
        style={[
          globalStyles.px3,
          globalStyles.fs14,
          globalStyles.fontWeightMedium,
          styles.link,
        ]}
      >
        {link}
      </Text>
    </Pressable>
  );
};

export { SocialButton };
