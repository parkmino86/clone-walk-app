import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AvailablePointsText } from './AvailablePointsText';
import { PointButton } from './PointButton';
import { StepCountText } from './StepCountText';

export function StepCounterView({ scaleAnim, onPressIn, onPressOut }) {
  const [steps, setSteps] = useState(0);
  const [collectedPoints, setCollectedPoints] = useState(0);

  const totalPoints = Math.floor(steps / 50);
  const availablePoints = totalPoints - collectedPoints;

  useEffect(() => {
    const interval = setInterval(() => setSteps((prev) => prev + 10), 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePressOut = () => {
    if (availablePoints > 0) {
      setCollectedPoints((prev) => prev + 1);
      onPressOut();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.pointsContainer}>
        <AvailablePointsText availablePoints={availablePoints} />
      </View>
      <PointButton
        scaleAnim={scaleAnim}
        onPressIn={onPressIn}
        onPressOut={handlePressOut}
      />
      <Text style={styles.subtitleText}>50걸음 당 1포인트</Text>
      <StepCountText steps={steps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  pointsContainer: {
    position: 'absolute',
    right: '50%',
    transform: [
      { translateX: '-50%' },
      { translateY: '25%' },
    ],
    zIndex: 2,
  },
  subtitleText: {
    fontSize: 16,
    color: '#4D4D4D',
    fontWeight: '300',
    marginTop: 10,
    marginBottom: 20,
  },
});