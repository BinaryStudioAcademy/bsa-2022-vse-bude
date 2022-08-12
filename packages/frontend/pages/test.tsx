import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faStar,
  faAddressBook,
} from '@fortawesome/free-regular-svg-icons';
import { css } from '@emotion/css';

const wrapper = css`
  .fontAwesome {
    background-color: black;
    border-radius: 0.2em;
    padding: 0.3em;
    margin: 10px;
    color: green;
  }
`;

export function Test() {
  return (
    <div>
      <FontAwesomeIcon icon={faUser} css={wrapper} />
      <FontAwesomeIcon icon={faStar} className="fontAwesome" />
      <FontAwesomeIcon icon={faAddressBook} className="fontAwesome" />
    </div>
  );
}
