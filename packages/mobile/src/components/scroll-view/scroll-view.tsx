import React, { ComponentPropsWithoutRef } from 'react';
import { ScrollView as ReactScrollView } from 'react-native';

type ScrollViewProps = ComponentPropsWithoutRef<typeof ReactScrollView>;

const ScrollView: React.FC<ScrollViewProps> = (props) => {
  return <ReactScrollView keyboardShouldPersistTaps="handled" {...props} />;
};

export { ScrollView };
