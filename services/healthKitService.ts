import { NativeModules, Alert } from 'react-native';

const { HealthKitModule } = NativeModules;

const initialize = async (): Promise<void> => {
  try {
    const isAvailable = await HealthKitModule.isHealthDataAvailable();
    if (!isAvailable) {
      Alert.alert('Health Data Unavailable', 'Health data is not available on this device.');
      return;
    }
    await HealthKitModule.requestAuthorization();
  } catch (error) {
    console.error('HealthKit Error:', error);
    Alert.alert('HealthKit Error', 'An error occurred. Please try again later.');
  }
};

const getStepCount = async (date: string): Promise<number> => {
  if (!date) {
    throw new Error('Date parameter is required for getStepCount.');
  }
  return await HealthKitModule.getStepCount(date);
};

const healthKitService = {
  initialize,
  getStepCount,
};

export default healthKitService;