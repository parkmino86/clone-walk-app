import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/icons/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}      
    >
      <Tabs.Screen
        name="(home)/index"
        options={{
          title: '홈',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="benefits/index"
        options={{
          title: '혜택',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="p.circle.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="health/index"
        options={{
          title: '건강',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="chart.bar.doc.horizontal.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="giftshop/index"
        options={{
          title: '선물샵',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="bag" color={color} />,
        }}
      />
      <Tabs.Screen
        name="news/index"
        options={{
          title: '뉴스',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="newspaper.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}