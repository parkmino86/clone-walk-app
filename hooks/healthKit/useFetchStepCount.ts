import { useEffect } from 'react';
import healthKitService from '@/services/healthKitService';

type StepCountResult =
  | { status: 'success'; steps: number }
  | { status: 'error'; error: string };

/**
 * HealthKit 데이터를 초기화하고 걸음 수를 가져옵니다.
 * 결과를 callback으로 전달합니다.
 *
 * @param callback - 결과를 처리할 콜백 함수
 * @param deps - useEffect의 의존성 배열
 */
export const useFetchStepCount = (callback: (result: StepCountResult) => void, deps: any[] = []) => {
  useEffect(() => {
    const fetchStepCount = async () => {
      try {
        const isAvailable = await healthKitService.isHealthDataAvailable();
        if (!isAvailable) {
          callback({ status: 'error', error: 'Health data is not available on this device.' });
          return;
        }

        await healthKitService.requestAuthorization();

        const steps = await healthKitService.getStepCount("2025-01-02");
        callback({ status: 'success', steps });
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error occurred while fetching steps.';
        callback({ status: 'error', error: errorMessage });
      }
    };

    fetchStepCount();
  }, deps);
};