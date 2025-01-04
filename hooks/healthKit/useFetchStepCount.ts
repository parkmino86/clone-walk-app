import { useEffect } from 'react';
import healthKitService from '@/services/healthKitService';

type StepCountResult =
  | { status: 'success'; steps: number }
  | { status: 'error'; error: string };

export const useFetchStepCount = (callback: (result: StepCountResult) => void) => {
  useEffect(() => {
    const fetchStepCount = async () => {
      try {
        await healthKitService.initialize();
        const steps = await healthKitService.getStepCount("2025-01-02");
        callback({ status: 'success', steps });
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error';
        callback({ status: 'error', error: errorMessage });
      }
    };

    fetchStepCount();
  }, [callback]);
};