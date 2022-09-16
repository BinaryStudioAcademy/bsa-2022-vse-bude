import { Row } from '@primitives';
import { Routes } from '@enums';
import { Logo } from '../logo';
import { Contacts, Policy } from '../links';
import { Form } from '../form';
import * as styles from './styles';

export const ContentWrapper = () => (
  <Row css={styles.wrapper}>
    <div css={styles.logoLinks}>
      <Logo />
      <Contacts email="vsebude.team@gmail.com" />
      <Policy path={Routes.RULES} />
    </div>
    <Form />
  </Row>
);
