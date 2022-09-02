import { useEffect } from "react";

export const useMouseLeave = (callback: () => void) => {
    useEffect(() => {
        const handleMove = (e) => {
            e = e ? e : window.event;
            const from = e.relatedTarget || e.toElement;
            if (!from || from.nodeName == "HTML") {
                callback();
            }
        };
        document.addEventListener("mouseout", handleMove);

        return () => {
          document.removeEventListener("mouseout", handleMove);
        };
    });
};