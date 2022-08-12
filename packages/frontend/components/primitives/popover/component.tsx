import React, { PureComponent } from 'react';
import { Popover } from 'react-tiny-popover';
import * as styles from './styles';
import type { PopoverProps, PopoverState } from './types';

class MyPopover extends PureComponent<PopoverProps, PopoverState> {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  setVisible(state) {
    this.setState({ visible: state });
  }

  render() {
    const { visible } = this.state;
    const { body } = this.props;
    const { children } = this.props;

    return (
      <Popover
        positions={['bottom']}
        padding={5}
        isOpen={visible}
        onClickOutside={() => this.setVisible(false)}
        content={<div css={styles.popover}>{children}</div>}
      >
        {body}
      </Popover>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <MyPopover ref={ref} {...props} />
));
