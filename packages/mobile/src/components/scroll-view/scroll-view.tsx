import React, { ComponentPropsWithoutRef } from 'react';
import { ScrollView as RNScrollView } from 'react-native';

type ScrollViewProps = ComponentPropsWithoutRef<typeof RNScrollView>;

const ScrollView: React.FC<ScrollViewProps> = (props) => {
  return <RNScrollView keyboardShouldPersistTaps="handled" {...props} />;
};

export { ScrollView };
