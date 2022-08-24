import type { ReactNode } from "react";

export type ModalProps = {
    children: (callback: () => void) => ReactNode;
};