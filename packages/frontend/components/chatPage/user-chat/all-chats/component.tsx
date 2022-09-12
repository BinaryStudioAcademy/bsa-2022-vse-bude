import { ChatItem } from "@components/primitives/chat-item";
import * as styles from "./styles";

 const AllChats = () => (
    <div css={styles.wrapper}>
      <ChatItem isActive={true}></ChatItem>
      <ChatItem isActive={false}></ChatItem>
    </div>
  );
  
export {AllChats};