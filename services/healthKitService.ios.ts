import { NativeModules, Alert } from 'react-native';

const { HealthKitModule } = NativeModules;

/**
 * HealthKit 데이터를 사용할 수 있는지 확인합니다.
 */
const isHealthDataAvailable = async (): Promise<boolean> => {
  try {
    return await HealthKitModule.isHealthDataAvailable();
  } catch (error) {
    throw new Error('HealthKit 사용 가능 여부를 확인하지 못했습니다.');
  }
};

/**
 * HealthKit 데이터 접근 권한을 요청합니다.
 */
const requestAuthorization = async (): Promise<void> => {
  try {
    await HealthKitModule.requestAuthorization();
  } catch (error) {
    console.error('HealthKit 권한 요청 에러:', error);
    throw new Error('HealthKit 접근 권한 요청에 실패했습니다.');
  }
};

/**
 * 걸음 수를 가져옵니다.
 */
const getStepCount = async (): Promise<number> => {
  return await HealthKitModule.getStepCount();
};

const healthKitService = {
  isHealthDataAvailable,
  requestAuthorization,
  getStepCount,
};

export default healthKitService;