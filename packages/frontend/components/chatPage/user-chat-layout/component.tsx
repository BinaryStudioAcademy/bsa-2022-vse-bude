import { Layout } from "@components/layout";
import { Container } from "@components/primitives";
import { useTranslation } from "next-i18next";
import type { FC } from "react";
import type { ChatPageProps } from "./types";
import * as styles from "./styles";

const ChatLayout: FC<ChatPageProps> = ({ children }) => {
  const { t } = useTranslation();

  return(
    <Layout>
      <Container>
          <div css={styles.wrapper}>
            <h3 css={styles.pageHeader}>{t('chat:chatPage')}</h3>
            {children}
          </div>
      </Container>  
    </Layout>
  );
};

export { ChatLayout };