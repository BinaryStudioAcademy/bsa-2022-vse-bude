import './fontAwesome.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCoffee, faComputer } from '@fortawesome/free-regular-svg-icons';

export function Sample() {
  return (
    <div>
      <FontAwesomeIcon icon={faUser} className="fontAwesome" />
      <FontAwesomeIcon icon={faCoffee} className="fontAwesome" />
      <FontAwesomeIcon icon={faComputer} className="fontAwesome" />
    </div>
  );
}
