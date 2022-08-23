import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import React from 'react';
import { AppIcon } from '~/common/types/types';
import { Text } from '~/components/components';

export const getTabOptions = (
  label: string,
  tabBarIcon: AppIcon,
): BottomTabNavigationOptions => ({
  tabBarIcon,
  tabBarLabel: ({ color }) => (
    <Text style={{ fontSize: 12, color }}>{label}</Text>
  ),
});
