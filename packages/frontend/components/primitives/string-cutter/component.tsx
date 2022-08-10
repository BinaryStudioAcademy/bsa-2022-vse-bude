import type { FC } from 'react';
import { useState, useRef } from 'react';
import type { StringCutterProps } from './types';

import * as styles from './styles';

const StringCutter: FC<StringCutterProps> = ({ children }) => {
  const [isCut, setIsCut] = useState(false);
  const cutterRef = useRef(null);

  const checkIsCut = () => {
    const cutterElem = cutterRef.current;
    if (cutterElem) {
      setIsCut(cutterElem.offsetWidth < cutterElem.scrollWidth);
    }
  };

  return (
    <div
      onMouseEnter={checkIsCut}
      data-is-cutted={isCut}
      css={styles.cutterWrapper}
    >
      <span ref={cutterRef} css={styles.cutterText}>
        {children}
      </span>
      {/* toltip */}
    </div>
  );
};

export { StringCutter };
