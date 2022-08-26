export interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label?: string;
  id: string;
  labelRequiredMark?: boolean;
  error?: string;
}
