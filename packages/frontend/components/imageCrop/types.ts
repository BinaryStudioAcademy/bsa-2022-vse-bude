export interface ImageCropModalProps {
  file: File;
  onSave: (file: File) => void;
  onClose: () => void;
  okLabel: string;
  dismissLabel: string;
  circle?: boolean;
}
