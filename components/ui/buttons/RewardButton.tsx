import React, { useReducer, useEffect } from 'react';
import { Alert, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { IconSymbol } from '@/components/ui/icons/IconSymbol';
import { Colors } from '@/constants/Colors';
import { usePoints } from '@/context/PointsContext';

interface RewardButtonProps {
  targetSteps: number;
  currentStepCount: number;  
}

type Status = 'disabled' | 'enabled' | 'completed';

interface State {
  receivedPoints: number | null;
  status: Status;
}

type Action =
  | { type: 'SET_RECEIVED_POINTS'; payload: number }
  | { type: 'UPDATE_STATUS'; payload: { currentStepCount: number; targetSteps: number } };

const initialState: State = {
  receivedPoints: null,
  status: 'disabled',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_RECEIVED_POINTS':
      return { ...state, receivedPoints: action.payload, status: 'completed' };

    case 'UPDATE_STATUS':
      const { currentStepCount, targetSteps } = action.payload;
      return {
        ...state,
        status: currentStepCount >= targetSteps ? 'enabled' : 'disabled',
      };

    default:
      return state;
  }
};

export function RewardButton({ targetSteps: stepsRequired, currentStepCount: currentSteps }: RewardButtonProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { dispatch: pointsDispatch } = usePoints();

  useEffect(() => {
    dispatch({
      type: 'UPDATE_STATUS',
      payload: { currentStepCount: currentSteps, targetSteps: stepsRequired },
    });
  }, [currentSteps]);

  return (
    <LinearGradient
      colors={['#FFFFFF', '#FFDCB5']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.wrapper}
    >
      <Text style={styles.stepText}>
        {stepsRequired === 0 ? '0 걸음부터' : `${stepsRequired.toLocaleString()} 걸음`}
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          state.status === 'disabled' && styles.buttonDisabled,
          state.status === 'completed' && styles.buttonCompleted,
        ]}
        onPress={() => {
          const points = Math.floor(Math.random() * 10) + 1;
          dispatch({ type: 'SET_RECEIVED_POINTS', payload: points });
          pointsDispatch({ type: 'INCREASE_POINTS', payload: points });    
          Alert.alert(
            '포인트 획득', 
            `${points} 포인트를 받았습니다!`
          );      
        }}
        disabled={state.status !== 'enabled'}
      >
        <View style={styles.buttonContent}>
          <IconSymbol name="p.circle.fill" size={20} color={Colors.common.highlightColor} />
          {state.status === 'completed' ? (
            <Text style={styles.completedText}>{state.receivedPoints} 받음</Text>
          ) : (
            <Text
              style={
                state.status === 'enabled' ? styles.buttonText : styles.buttonTextDisabled
              }
            >
              랜덤 받기
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 140,
    padding: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  stepText: {
    fontSize: 16,
    marginBottom: 16,
    color: '#444444',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF8902',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#F0F0F0',
  },
  buttonCompleted: {
    backgroundColor: 'transparent',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    marginLeft: 4,
  },
  buttonTextDisabled: {
    color: '#B0B0B0',
    marginLeft: 4,
  },
  completedText: {
    color: '#B0B0B0',
    marginLeft: 4,
  },
});
