import React, { useReducer } from 'react';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '@/components/home/HeaderView';
import { FlyoutIcon } from '@/components/home/FlyoutIcon';
import { StepCounterView } from '@/components/home/step-counter/StepCounterView';
import { Colors } from '@/constants/Colors';

const constants = {
  SCREEN_WIDTH: Dimensions.get('window').width,
  SCREEN_HEIGHT: Dimensions.get('window').height,
  ICON_SIZE: 60,
};

interface State {
  points: number;
  flyoutIcons: Array<{
    id: number;
    startPosition: { x: number; y: number };
    endPosition: { x: number; y: number };
  }>;
}

type Action =
  | { type: "INCREASE_POINTS" }
  | { type: "ADD_FLYOUT_ICON"; payload: { x: number; y: number } }
  | { type: "REMOVE_FLYOUT_ICON"; payload: { id: number } };

const HomeView = () => {
  const [state, dispatch] = useReducer(
    (state: State, action: Action): State => {
      switch (action.type) {
        case "INCREASE_POINTS":
          return { ...state, points: state.points + 1 };

        case "ADD_FLYOUT_ICON":
          return {
            ...state,
            flyoutIcons: [
              ...state.flyoutIcons,
              {
                id: Date.now(),
                startPosition: {
                  x: (constants.SCREEN_WIDTH - constants.ICON_SIZE) / 2,
                  y: constants.SCREEN_HEIGHT / 5,
                },
                endPosition: { x: action.payload.x, y: action.payload.y },
              },
            ],
          };

        case "REMOVE_FLYOUT_ICON":
          return {
            ...state,
            flyoutIcons: state.flyoutIcons.filter(
              (icon) => icon.id !== action.payload.id
            ),
          };

        default:
          return state;
      }
    },
    {
      points: 0,
      flyoutIcons: [],
    }
  );

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
            dispatch({ type: "INCREASE_POINTS" });
            dispatch({
              type: "ADD_FLYOUT_ICON",
              payload: {
                x: Math.random() * (constants.SCREEN_WIDTH / 3),
                y: 0,
              },
            });
          }}
        />
        {state.flyoutIcons.map((icon) => (
          <FlyoutIcon
            key={icon.id}
            name="p.circle.fill"
            startPosition={icon.startPosition}
            endPosition={icon.endPosition}
            size={constants.ICON_SIZE}
            color={Colors.common.highlightColor}
            onAnimationComplete={() =>
              dispatch({
                type: "REMOVE_FLYOUT_ICON",
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