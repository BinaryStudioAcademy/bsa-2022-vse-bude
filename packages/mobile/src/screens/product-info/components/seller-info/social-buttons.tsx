import React, { FC } from 'react';
import {
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  Pressable,
  Text,
} from '~/components/components';
import { AuthorDto, ColorPalette, SocialMediaType } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type SocialButtonsProps = Pick<AuthorDto, 'socialMedia'>;

const SocialButtons: FC<SocialButtonsProps> = ({ socialMedia }) => {
  return (
    <>
      {socialMedia?.map((media) => (
        <Pressable
          key={media.id}
          style={[
            globalStyles.alignItemsCenter,
            globalStyles.flexDirectionRow,
            globalStyles.mt4,
          ]}
        >
          {media.socialMedia == SocialMediaType.FACEBOOK ? (
            <FacebookIcon size={15} color={ColorPalette.YELLOW_200} />
          ) : media.socialMedia == SocialMediaType.INSTAGRAM ? (
            <InstagramIcon size={15} color={ColorPalette.YELLOW_200} />
          ) : media.socialMedia == SocialMediaType.LINKEDIN ? (
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
            {media.link}
          </Text>
        </Pressable>
      ))}
    </>
  );
};

export { SocialButtons };
