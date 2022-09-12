import type { FC } from 'react';
import { useState, useRef } from 'react';
import { Tooltip } from '../tooltip';
import type { StringCutterProps } from './types';

import * as styles from './styles';

const StringCutter: FC<StringCutterProps> = ({ children, lines = 1 }) => {
  const [isCut, setIsCut] = useState(false);
  const cutterRef = useRef(null);
  const isMultiLine = lines > 1;

  const checkIsCut = () => {
    const cutterElem = cutterRef.current;
    if (cutterElem) {
      const { offsetWidth, scrollWidth, offsetHeight, scrollHeight } =
        cutterElem;

      setIsCut(
        isMultiLine ? scrollHeight > offsetHeight : scrollWidth > offsetWidth,
      );
    }
  };

  return (
    <div
      ref={cutterRef}
      css={[isMultiLine ? styles.multiline(lines) : styles.singleline]}
      onMouseEnter={checkIsCut}
    >
      {isCut ? (
        <Tooltip refNode="parent" trigger={children}>
          {children}
        </Tooltip>
      ) : (
        <span>{children}</span>
      )}
    </div>
  );
};

export { StringCutter };
