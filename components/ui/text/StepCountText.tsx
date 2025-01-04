import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    marginTop: 16,
  },
  number: {
    fontSize: 42,
    color: '#000',
    fontWeight: '700',
  },
  text: {
    fontSize: 20,
    color: '#4D4D4D',
    fontWeight: '300',
    marginLeft: 8,
  },
});