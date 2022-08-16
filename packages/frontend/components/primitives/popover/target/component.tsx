import React from 'react';

interface CustomComponentProps extends React.ComponentPropsWithoutRef<'div'> {
  onClick(): void;
}

const Target = React.forwardRef<HTMLDivElement, CustomComponentProps>(
  (props, ref) => (
    <div>
      <button
        ref={ref}
        onClick={props.onClick}
        style={{ color: 'black', width: '200px' }}
      >
        {props.children}
      </button>
    </div>
  ),
);

Target.displayName = 'Target';
export default Target;
