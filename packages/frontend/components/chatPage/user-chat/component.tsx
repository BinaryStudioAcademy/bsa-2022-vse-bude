import { AllChats } from "./all-chats/component";
import { CurrentChat } from "./current-chat/component";
import * as styles from "./styles";

 const Chat = () => (
    <div css={styles.wrapper}>
      <AllChats />
      <CurrentChat />
    </div>
  );
export { Chat };