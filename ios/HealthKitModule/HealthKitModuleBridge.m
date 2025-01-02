//
//  HealthKitModuleBridge.m
//  clonewalkapp
//
//  Created by minoh.park on 1/2/25.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(HealthKitModule, NSObject)

RCT_EXTERN_METHOD(isHealthDataAvailable:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(requestAuthorization:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(getStepCount:(NSString *)startDate resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)

@end
