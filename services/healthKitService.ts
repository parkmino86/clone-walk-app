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
 * 지정된 날짜의 걸음 수를 가져옵니다.
 * 
 * @param date - 걸음 수를 조회할 날짜 (YYYY-MM-DD 형식)
 */
const getStepCount = async (date: string): Promise<number> => {
  if (!date) {
    throw new Error('getStepCount에 필요한 날짜 매개변수가 없습니다.');
  }
  return await HealthKitModule.getStepCount(date);
};

const healthKitService = {
  isHealthDataAvailable,
  requestAuthorization,
  getStepCount,
};

export default healthKitService;