export interface ImageCropModalProps {
  file: File;
  onSave: (file: File) => void;
  onClose: () => void;
  circle?: boolean;
}
