import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IconSymbol } from '@/components/ui/icons/IconSymbol';
import { Colors } from '@/constants/Colors';

interface RewardButtonProps {
  stepsRequired: number;
  currentSteps: number;
  onPress: (steps: number) => void;
}

export function RewardButton({ stepsRequired, currentSteps, onPress }: RewardButtonProps) {
  const isEnabled = currentSteps >= stepsRequired;

  return (
    <View style={styles.card}>
      <Text style={styles.stepsText}>
        {stepsRequired === 0 ? '0 걸음부터' : `${stepsRequired.toLocaleString()} 걸음`}
      </Text>
      <TouchableOpacity
        style={[styles.button, !isEnabled && styles.disabledButton]}
        onPress={() => onPress(stepsRequired)}
        disabled={!isEnabled}
      >
        <View style={styles.buttonContent}>
          <IconSymbol
            name="p.circle.fill"
            size={styles.icon.size}
            color={Colors.common.highlightColor}
          />
          <Text style={[styles.buttonText, !isEnabled && styles.disabledText]}>
            랜덤 받기
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  stepsText: {
    fontSize: 16,
    marginBottom: 16,
    color: '#444444',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#F0F0F0',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  icon: {
    size: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  disabledText: {
    color: '#B0B0B0',
  },
});