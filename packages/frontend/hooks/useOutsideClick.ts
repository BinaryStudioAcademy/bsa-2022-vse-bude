import { useRouter } from 'next/router';
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
  const router = useRouter();

  useEffect(() => {
    const handleClick = (event) => {
      let path = '/';

      if (ref.current) {
        if (ref.current.contains(event.target)) {
          event.target.hasAttribute('path-label')
            ? (path = event.target.getAttribute('path-label'))
            : (path = event.target.parentElement.getAttribute('path-label'));

          router.push(path);
        }

        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [callback, ref, router]);

  return ref;
};
