import { useEffect } from "react";

export const useOutsideClick = (elementRef, handler, attached = true) =>{
    useEffect(() => {
      if(!attached) return;
      const handlerClick = (e) => {
        if(!elementRef.current) return;
        if(!elementRef.current.contains(e.target)){
          handler();
        }
      };
      document.addEventListener('click', handlerClick);
  
      return () => document.removeEventListener('click', handlerClick);
    }, [elementRef, handler, attached]);
 };