import { useReducer } from 'react';
import { Dimensions } from 'react-native';

interface State {
  points: number;
  steps: number;
  flyoutIcons: Array<{
    id: number;
    startPosition: { x: number; y: number };
    endPosition: { x: number; y: number };
  }>;
}

type Action =
  | { type: 'INCREASE_POINTS'; payload: number }
  | { type: 'SET_STEPS'; payload: number }
  | { type: 'ADD_FLYOUT_ICON'; payload: { x: number; y: number } }
  | { type: 'REMOVE_FLYOUT_ICON'; payload: { id: number } };

const initialState: State = {
  points: 0,
  steps: 0,
  flyoutIcons: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREASE_POINTS':
      return { ...state, points: state.points + action.payload };

    case 'SET_STEPS':
      return { ...state, steps: action.payload };

    case 'ADD_FLYOUT_ICON':
      return {
        ...state,
        flyoutIcons: [
          ...state.flyoutIcons,
          {
            id: Date.now(),
            startPosition: {
              x: (Dimensions.get('window').width - 60) / 2,
              y: Dimensions.get('window').height / 5,
            },
            endPosition: { x: action.payload.x, y: action.payload.y },
          },
        ],
      };

    case 'REMOVE_FLYOUT_ICON':
      return {
        ...state,
        flyoutIcons: state.flyoutIcons.filter(
          (icon) => icon.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export const useHomeState = () => {
  return useReducer(reducer, initialState);
};