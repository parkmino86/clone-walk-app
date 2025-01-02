//
//  HealthKitModule.swift
//  clonewalkapp
//
//  Created by minoh.park on 1/2/25.
//

import Foundation
import HealthKit

@objc(HealthKitModule)
class HealthKitModule: NSObject {
    private let healthStore = HKHealthStore()

    /// Health 데이터가 기기에서 사용 가능한지 확인합니다.
    /// - Parameters:
    ///   - resolve: 사용 가능 여부를 나타내는 `true` 또는 `false`를 반환합니다.
    ///   - reject: 사용되지 않음. 이 작업은 실패하지 않습니다.
    @objc
    func isHealthDataAvailable(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        resolve(HKHealthStore.isHealthDataAvailable())
    }

    /// HealthKit 데이터 접근 권한을 요청합니다.
    /// - Parameters:
    ///   - resolve: 권한 요청 성공 시 `true`를 반환합니다.
    ///   - reject: 권한 요청 실패 시 에러를 반환합니다.
    @objc
    func requestAuthorization(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let readTypes: Set<HKObjectType> = [
            HKObjectType.quantityType(forIdentifier: .stepCount)!
        ]

        healthStore.requestAuthorization(toShare: nil, read: readTypes) { success, error in
            if let error = error {
                reject("AUTH_ERROR", "Authorization failed", error)
            } else {
                resolve(success)
            }
        }
    }

    /// 주어진 시작 날짜부터 총 걸음 수를 가져옵니다.
    /// - Parameters:
    ///   - startDate: 시작 날짜를 나타내는 ISO8601 형식의 문자열.
    ///   - resolve: 총 걸음 수를 `Double` 형식으로 반환합니다.
    ///   - reject: 쿼리 실패 또는 잘못된 날짜 형식일 경우 에러를 반환합니다.
    @objc
    func getStepCount(_ startDate: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        guard let stepType = HKSampleType.quantityType(forIdentifier: .stepCount) else {
            reject("TYPE_ERROR", "Step count type not available", nil)
            return
        }

      let calendar = Calendar.current
      let now = Date()
      let startOfDay = calendar.startOfDay(for: now)

      let predicate = HKQuery.predicateForSamples(withStart: startOfDay, end: now, options: .strictStartDate)
      let query = HKStatisticsQuery(quantityType: HKObjectType.quantityType(forIdentifier: .stepCount)!, quantitySamplePredicate: predicate, options: .cumulativeSum) { _, result, error in
          if let error = error {
              reject("QUERY_ERROR", "Failed to fetch step count", error)
          } else if let sum = result?.sumQuantity() {
              let steps = sum.doubleValue(for: HKUnit.count())
              resolve(steps)
          } else {
              resolve(0)
          }
      }

      healthStore.execute(query)
    }
}
