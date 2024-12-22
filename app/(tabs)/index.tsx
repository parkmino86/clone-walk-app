import React, { useReducer } from 'react';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '@/components/home/HeaderView';
import { FlyoutIcon } from '@/components/home/FlyoutIcon';
import { StepCounterView } from '@/components/home/step-counter/StepCounterView';
import { Colors } from '@/constants/Colors';

const { width, height } = Dimensions.get('window');
const ICON_SIZE = 60;
const START_POSITION = { x: (width - ICON_SIZE) / 2, y: (height / 5) };
const END_POSITION = { x: (width / 3), y: 0 };

const initialState = {
  points: 0,
  flyoutIcons: [],
};

const actionTypes = {
  INCREASE_POINTS: 'INCREASE_POINTS',
  ADD_FLYOUT_ICON: 'ADD_FLYOUT_ICON',
  REMOVE_FLYOUT_ICON: 'REMOVE_FLYOUT_ICON',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_POINTS:
      return { ...state, points: state.points + 1 };
    case actionTypes.ADD_FLYOUT_ICON:
      return {
        ...state,
        flyoutIcons: [
          ...state.flyoutIcons,
          { id: Date.now(), startPosition: START_POSITION, endPosition: END_POSITION },
        ],
      };
    case actionTypes.REMOVE_FLYOUT_ICON:
      return {
        ...state,
        flyoutIcons: state.flyoutIcons.filter((icon) => icon.id !== action.id),
      };
    default:
      return state;
  }
};

const HomeView = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePointIncrease = () => {
    dispatch({ type: actionTypes.INCREASE_POINTS });
    dispatch({ type: actionTypes.ADD_FLYOUT_ICON });
  };

  const handleAnimationComplete = (id) => {
    dispatch({ type: actionTypes.REMOVE_FLYOUT_ICON, id });
  };

  return (
    <LinearGradient
      colors={[Colors.common.appColor, Colors.light.background]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <Header points={state.points} />
        <StepCounterView onPointIncrease={handlePointIncrease} />
        {state.flyoutIcons.map((icon) => (
          <FlyoutIcon
            key={icon.id}
            name="p.circle.fill"
            startPosition={icon.startPosition}
            endPosition={icon.endPosition}
            size={ICON_SIZE}
            color={Colors.common.highlightColor}
            onAnimationComplete={() => handleAnimationComplete(icon.id)}
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