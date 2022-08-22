import { useEffect, useRef } from 'react';

/**
 * It returns a ref that you can attach to an element. When the user clicks outside
 * of that element, the callback function is called
 * @param callback - () => void - This is the function that will be called
 * when the user clicks outside of the element.
 * @returns A ref object
 */
export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [callback, ref]);

  return ref;
};
