import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';

type StepCounterViewProps = {
  scaleAnim: Animated.Value;
  onPressIn: () => void;
  onPressOut: () => void;
};

export function StepCounterView({ scaleAnim, onPressIn, onPressOut }: StepCounterViewProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitleText}>50걸음 당 1포인트</Text>
      <HapticTab onPressIn={onPressIn} onPressOut={onPressOut}>
        <Animated.View style={[styles.iconContainer, { transform: [{ scale: scaleAnim }] }]}>
          <IconSymbol name="p.circle.fill" size={120} color="#FFD700" />
        </Animated.View>
      </HapticTab>
      <View style={styles.stepContainer}>
        <Text style={styles.stepNumber}>2,085</Text>
        <Text style={styles.stepText}>걸음</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  subtitleText: {
    fontSize: 16,
    color: '#4D4D4D',
    fontWeight: '300',
    marginBottom: 12,
  },
  iconContainer: {
    alignItems: 'center',
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  stepNumber: {
    fontSize: 42,
    color: '#000',
    fontWeight: '700',
  },
  stepText: {
    fontSize: 20,
    color: '#4D4D4D',
    fontWeight: '300',
    marginLeft: 8,
  },
});