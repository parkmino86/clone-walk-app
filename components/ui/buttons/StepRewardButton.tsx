import React, { FC } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/icons/IconSymbol';
import { Colors } from '@/constants/Colors';

type StepRewardButtonProps = {
  scaleAnim: Animated.Value;
  onPressIn: () => void;
  onPressOut: () => void;
};

export const StepRewardButton: FC<StepRewardButtonProps> = ({ scaleAnim, onPressIn, onPressOut }) => (
  <View style={styles.container}>
    <HapticTab onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[styles.icon, { transform: [{ scale: scaleAnim }] }]}>
        <IconSymbol name="p.circle.fill" size={120} color={Colors.common.yellow} />
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
    shadowColor: Colors.common.primaryShadowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 10,
  },
});