import type { MessageProps } from "./types";

const Message = ({sender, message}: MessageProps) => (
    <div message-sender={sender}>{message}</div>
  );
export { Message };