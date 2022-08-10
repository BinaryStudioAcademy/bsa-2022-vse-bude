import type { FC } from 'react';
import { useEffect, useState, useRef } from 'react';
import type { StringCutterProps } from './types';

import * as styles from './styles';

const StringCutter: FC<StringCutterProps> = ({ text }) => {
  const [isCutted, setIsCutted] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const cutterRef = useRef(null);

  useEffect(() => {
    const cutterElem = cutterRef.current;
    if (cutterElem) {
      setIsCutted(cutterElem.offsetWidth < cutterElem.scrollWidth);
    }
  }, [cutterRef]);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-is-cutted={isCutted}
      css={styles.cutterWrapper}
    >
      <span ref={cutterRef} css={styles.cutterText}>
        {text}
      </span>
      {isHover && isCutted && (
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
          {text}
        </div>
      )}
    </div>
  );
};

export { StringCutter };
