import React from 'react';
import Color from 'color';
import { ColorPalette } from '@vse-bude/shared';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { Pressable } from '~/components/components';

type TabBarButtonProps = BottomTabBarButtonProps;

const TabBarButton: React.FC<TabBarButtonProps> = (props) => {
  return (
    <Pressable
      android_ripple={{
        color: Color(ColorPalette.YELLOW_100).alpha(0.1).rgb().string(),
        radius: 50,
      }}
      {...props}
    />
  );
};

export { TabBarButton };
