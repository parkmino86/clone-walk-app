import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

export const StepCountText = ({ steps }: { steps: number }) => (
  <View style={styles.container}>
    <Text style={styles.number}>{steps.toLocaleString()}</Text>
    <Text style={styles.text}>걸음</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 36,
    color: '#000',
    fontWeight: '700',
  },
  text: {
    fontSize: 16,
    color: Colors.common.textColor,
    marginLeft: 4,
  },
});