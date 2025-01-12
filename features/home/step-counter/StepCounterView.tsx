import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { AvailablePointsText } from '@/components/ui/text/AvailablePointsText';
import { StepRewardButton } from '@/components/ui/buttons/StepRewardButton';
import { StepCountText } from '@/components/ui/text/StepCountText';
import { Colors } from '@/constants/Colors';

type StepCounterViewProps = {
  steps: number;
  onPointIncrease: () => void;
};

export function StepCounterView({ steps, onPointIncrease }: StepCounterViewProps) {
  const [collectedPoints, setCollectedPoints] = React.useState(0);
  const scaleEffect = useRef(new Animated.Value(1)).current;

  const totalPoints = Math.floor(steps / 50);
  const availablePoints = totalPoints - collectedPoints;

  const handlePressIn = () => {
    Animated.timing(scaleEffect, {
      toValue: 0.9,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleEffect, {
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
        <StepRewardButton
          scaleEffect={scaleEffect}
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
    fontSize: 15,
    color: Colors.common.textColor,
    fontWeight: '300',
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
