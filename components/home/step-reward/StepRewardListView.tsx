import React from 'react';
import { ScrollView, StyleSheet, View, Alert, Text } from 'react-native';
import { RewardButton } from '@/components/ui/buttons/RewardButton';
import { Colors } from '@/constants/Colors';

type StepRewardListProps = {
  rewards: number[];
  currentSteps: number;
};

export function StepRewardListView({ rewards, currentSteps }: StepRewardListProps) {
  const handleRewardPress = (stepsRequired: number) => {
    Alert.alert('Reward', `${stepsRequired} 걸음 랜덤 포인트를 받았습니다!`);
  };

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
            stepsRequired={stepsRequired}
            currentSteps={currentSteps}
            onPress={() => handleRewardPress(stepsRequired)}
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
  descriptionText: {
    fontSize: 16,
    color: Colors.common.descriptionTextColor,
    fontWeight: '300',
    marginBottom: 12,
    textAlign: 'center',
  },
  rewardContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
});

export default StepRewardListView;