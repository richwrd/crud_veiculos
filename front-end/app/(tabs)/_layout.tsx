import { Tabs } from 'expo-router';
import React from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Veiculos',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="car-sport-sharp" size={24} color="black" />
          ),
        }}
      />,
      <Tabs.Screen
        name="acessorio"
        options={{
          title: 'Acessórios',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="tag" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
