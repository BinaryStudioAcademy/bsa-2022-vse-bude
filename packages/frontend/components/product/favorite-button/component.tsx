import React from 'react';
import notFavoriteIcon from '../../../assets/icons/favorite-icon.svg';
import { favoriteIcon } from './styles';

export const FavoriteButton = () => (
  <React.Fragment>
    <div css={favoriteIcon}>
      <div>
        <img src={notFavoriteIcon.src} alt="" />
      </div>
    </div>
  </React.Fragment>
);
