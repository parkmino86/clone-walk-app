import React from 'react';
import { Alert, Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeHeaderView } from '@/features/home/HomeHeaderView';
import { StepRewardEffect } from '@/components/ui/effects/StepRewardEffect';
import { StepCounterView } from '@/features/home/step-counter/StepCounterView';
import { DailyCheckBannerView } from '@/features/home/daily-check/DailyCheckView';
import { StepRewardListView } from '@/features/home/step-reward/StepRewardListView';
import { EarningPointsView } from '@/features/home/earning-points/EarningPointsView';
import { EarningShortcutsView } from '@/features/home/earning-shortcuts/EarningShortcutsView';
import { HealthShortcutsView } from '@/features/home/health-shortcuts/HealthShortcutsView';
import { Colors } from '@/constants/Colors';
import { useHomeState } from '@/app/(tabs)/(home)/useHomeState';
import { useFetchStepCount } from '@/hooks/healthKit/useFetchStepCount';
import { usePoints } from '@/context/PointsContext';

const HomeView = () => {
  const [state, dispatch] = useHomeState();
  const { state: pointsState, dispatch: pointsDispatch } = usePoints();

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
    <ScrollView
      stickyHeaderIndices={[1]}
    >
      <View>
        {state.flyoutIcons.map((icon) => (
          <StepRewardEffect
            key={icon.id}
            name="p.circle.fill"
            startPosition={icon.startPosition}
            endPosition={icon.endPosition}
            size={60}
            color={Colors.common.yellow}
            onAnimationComplete={() =>
              dispatch({
                type: 'REMOVE_FLYOUT_ICON',
                payload: { id: icon.id },
              })
            }
          />
        ))}
      </View>

      <View style={[styles.stickyHeader, { paddingTop: useSafeAreaInsets().top }]}>
        <HomeHeaderView points={pointsState.points} />        
      </View>

      <LinearGradient
        colors={[Colors.common.primary, Colors.light.background]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View style={styles.stepSection}>             
          <StepCounterView
            onPointIncrease={() => {
              pointsDispatch({ type: 'INCREASE_POINTS', payload: 1 });
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
          <DailyCheckBannerView style={styles.dailyCheckBanner} />
        </View>
      </LinearGradient>

      <View style={[styles.earningPointsSection, { paddingBottom: 100 + useSafeAreaInsets().bottom }]}>
        <EarningPointsView />    
        <EarningShortcutsView />    
        <HealthShortcutsView />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({  
  stickyHeader: {
    backgroundColor: Colors.common.primary,
    paddingBottom: Colors.common.padding,
  },
  stepSection: {
    paddingVertical: Colors.common.padding,
  },
  dailyCheckBanner: {
    marginTop: Colors.common.padding,
    marginHorizontal: Colors.common.padding,
  },
  earningPointsSection: {
    backgroundColor: Colors.light.background,
    flex: 1,
    paddingVertical: Colors.common.padding,
  },
});

export default HomeView;
