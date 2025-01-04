import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface PointsState {
  points: number;
}

type PointsAction = { type: 'INCREASE_POINTS'; payload: number };

const initialState: PointsState = { points: 0 };

const PointsContext = createContext<{
  state: PointsState;
  dispatch: React.Dispatch<PointsAction>;
} | null>(null);

const pointsReducer = (state: PointsState, action: PointsAction): PointsState => {
  switch (action.type) {
    case 'INCREASE_POINTS':
      return { ...state, points: state.points + action.payload };
    default:
      return state;
  }
};

export const PointsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(pointsReducer, initialState);
  return (
    <PointsContext.Provider value={{ state, dispatch }}>
      {children}
    </PointsContext.Provider>
  );
};

export const usePoints = () => {
  const context = useContext(PointsContext);
  if (!context) {
    throw new Error('usePoints must be used within PointsProvider');
  }
  return context;
};