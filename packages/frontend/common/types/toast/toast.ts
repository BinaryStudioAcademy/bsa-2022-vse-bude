import type { ToastLevel } from "./level";

export interface Toast {
  id: string;
  level: ToastLevel;
  title: string;
  description: string;
}
