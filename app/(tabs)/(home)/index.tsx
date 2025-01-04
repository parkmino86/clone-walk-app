import React from 'react';
import { Alert, Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '@/components/home/HeaderView';
import { FlyoutIcon } from '@/components/ui/icons/FlyoutIcon';
import { StepCounterView } from '@/components/home/step-counter/StepCounterView';
import { StepRewardListView } from '@/components/home/step-reward/StepRewardListView';
import { Colors } from '@/constants/Colors';
import { useHomeState } from '@/hooks/useHomeState';
import { useFetchStepCount } from '@/hooks/healthKit/useFetchStepCount';

const HomeView = () => {
  const [state, dispatch] = useHomeState();

  useFetchStepCount((result) => {
    switch (result.status) {
      case 'success':
        dispatch({ type: 'SET_STEPS', payload: result.steps });
        break;
      case 'error':
        Alert.alert('HealthKit Error', `An error occurred: ${result.error}`);
        break;
      default:
        break;
    }
  }, []);

  return (
    <LinearGradient
      colors={[Colors.common.appColor, Colors.light.background]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <Header points={state.points} />
        <StepCounterView
          onPointIncrease={() => {
            dispatch({ type: 'INCREASE_POINTS', payload: 1 });
            dispatch({
              type: 'ADD_FLYOUT_ICON',
              payload: {
                x: Math.random() * (Dimensions.get('window').width / 3),
                y: 0,
              },
            });
          }}
          steps={state.steps}
        />
        <StepRewardListView rewards={state.rewardSteps} currentSteps={state.steps} />
        {state.flyoutIcons.map((icon) => (
          <FlyoutIcon
            key={icon.id}
            name="p.circle.fill"
            startPosition={icon.startPosition}
            endPosition={icon.endPosition}
            size={60}
            color={Colors.common.highlightColor}
            onAnimationComplete={() =>
              dispatch({
                type: 'REMOVE_FLYOUT_ICON',
                payload: { id: icon.id },
              })
            }
          />
        ))}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});

export default HomeView;