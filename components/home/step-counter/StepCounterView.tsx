import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { AvailablePointsText } from '../../ui/text/AvailablePointsText';
import { PointButton } from '../../ui/buttons/PointButton';
import { StepCountText } from '../../ui/text/StepCountText';
import { Colors } from '@/constants/Colors';

type StepCounterViewProps = {
  steps: number;
  onPointIncrease: () => void;
};

export function StepCounterView({ steps, onPointIncrease }: StepCounterViewProps) {
  const [collectedPoints, setCollectedPoints] = React.useState(0);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const totalPoints = Math.floor(steps / 50);
  const availablePoints = totalPoints - collectedPoints;

  const handlePressIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 0.9,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();

    if (availablePoints > 0) {
      setCollectedPoints((prev) => prev + 1);
      onPointIncrease();
    }
  };

  return (
    <React.Fragment>
      <Text style={styles.descriptionText}>50걸음 당 1포인트</Text>
      <View style={styles.stepCounterContainer}>
        {availablePoints > 0 && (
          <View style={styles.availablePointsContainer}>
            <AvailablePointsText availablePoints={availablePoints} />
          </View>
        )}
        <PointButton
          scaleAnim={scaleAnim}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        />
        <StepCountText steps={steps} />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  descriptionText: {
    fontSize: 16,
    color: Colors.common.descriptionTextColor,
    fontWeight: '300',
    marginTop: 20,
    textAlign: 'center',
  },
  stepCounterContainer: {
    alignItems: 'center',
  },
  availablePointsContainer: {
    position: 'absolute',
    right: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '25%' }],
    zIndex: 10,
  },
});