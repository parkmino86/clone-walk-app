import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '@/components/home/HeaderView';
import { StepCounterView } from '@/components/home/step-counter/StepCounterView';
import { Colors } from '@/constants/Colors';

export default function HomeView() {
  const [points, setPoints] = useState(0);

  const handlePointIncrease = () => {
    setPoints(points + 1);
  };

  return (
    <LinearGradient
      colors={['#FEA33C', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <Header points={points} />
        <StepCounterView onPointIncrease={handlePointIncrease} />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});