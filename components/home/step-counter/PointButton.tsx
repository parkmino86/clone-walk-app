import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';

type PointButtonProps = {
  scaleAnim: Animated.Value;
  onPressIn: () => void;
  onPressOut: () => void;
};

export const PointButton = ({ scaleAnim, onPressIn, onPressOut }: PointButtonProps) => (
  <View style={styles.container}>
    <HapticTab onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[styles.icon, { transform: [{ scale: scaleAnim }] }]}>
        <IconSymbol name="p.circle.fill" size={120} color="#FFD700" />
      </Animated.View>
    </HapticTab>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
