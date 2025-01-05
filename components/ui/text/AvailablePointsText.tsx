import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

type AvailablePointsTextProps = {
  availablePoints: number;
};

export const AvailablePointsText = ({ availablePoints }: AvailablePointsTextProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>+{availablePoints.toLocaleString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.common.primaryAccent,
    borderRadius: 16,
    height: 32,
    paddingHorizontal: 8,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  text: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});