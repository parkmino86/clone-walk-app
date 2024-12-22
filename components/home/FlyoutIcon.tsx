import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';

export const FlyoutIcon = ({
  name,
  startPosition,
  endPosition,
  size = 40,
  color = Colors.common.highlightColor,
  onAnimationComplete,
}: {
  name: string;
  startPosition: { x: number; y: number };
  endPosition: { x: number; y: number };
  size?: number;
  color?: string;
  onAnimationComplete?: () => void;
}) => {
  const animatedPosition = useRef(new Animated.ValueXY(startPosition)).current;
  const animatedOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedPosition, {
        toValue: endPosition,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(animatedOpacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => onAnimationComplete?.());
  }, [startPosition, endPosition]);

  return (
    <Animated.View
      style={[
        styles.iconContainer,
        {
          transform: animatedPosition.getTranslateTransform(),
          opacity: animatedOpacity,
        },
      ]}
    >
      <IconSymbol name={name} size={size} color={color} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
  },
});