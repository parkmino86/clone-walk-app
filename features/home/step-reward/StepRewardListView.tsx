import React from 'react';
import { ScrollView, StyleSheet, View, Alert } from 'react-native';
import { RewardButton } from '@/components/ui/buttons/RewardButton';
import { Colors } from '@/constants/Colors';

type StepRewardListProps = {
  rewards: number[];
  currentSteps: number;
};

export function StepRewardListView({ rewards, currentSteps }: StepRewardListProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.rewardContainer}
      >
        {rewards.map((stepsRequired) => (
          <RewardButton
            key={stepsRequired}
            targetSteps={stepsRequired}
            currentStepCount={currentSteps}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 16,
  },
  rewardContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
});

export default StepRewardListView;