import type { FC } from 'react';
import { useState, useRef } from 'react';
import type { StringCutterProps } from './types';

import * as styles from './styles';

const StringCutter: FC<StringCutterProps> = ({ children }) => {
  const [isCut, setIsCut] = useState(false);
  const cutterRef = useRef(null);

  const handleMouseLeave = () => setIsCut(false);

  const checkIsCutted = () => {
    const cutterElem = cutterRef.current;
    if (cutterElem) {
      setIsCut(cutterElem.offsetWidth < cutterElem.scrollWidth);
    }
  };

  return (
    <div
      onMouseEnter={checkIsCutted}
      onMouseLeave={handleMouseLeave}
      data-is-cutted={isCut}
      css={styles.cutterWrapper}
    >
      <span ref={cutterRef} css={styles.cutterText}>
        {children}
      </span>
      {isCut && (
        // temp tooltip
        <div
          style={{
            position: 'absolute',
            whiteSpace: 'nowrap',
            height: '30px',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'black',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export { StringCutter };
