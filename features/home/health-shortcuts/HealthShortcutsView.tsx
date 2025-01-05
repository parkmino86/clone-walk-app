import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { HealthShortcutsCardItem } from '@/features/home/health-shortcuts/HealthShortcutsCardItem';

export function HealthShortcutsView() {
  const sections = [
    {
      id: 1,
      title: '어제 얼마나 걸었지?',
      description: '일/주/월별\n걸음 수 확인',
      icon: 'chart.bar.xaxis.ascending',
    },
    {
      id: 2,
      title: '병원에 안 가고 미리 확인',
      description: 'AI 얼굴 인식으로\n건강 체크',
      icon: 'faceid',
    },
    {
      id: 3,
      title: '오늘의 몸 상태는?',
      description: '인바디 연동하고\n변화 기록',
      icon: 'waveform.path.ecg.rectangle.fill',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>건강 관리에 진심인 머니워크</Text>
      {sections.map((section) => (
        <HealthShortcutsCardItem
          key={section.id}
          title={section.title}
          description={section.description}
          icon={section.icon}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.common.black,
    marginBottom: 16,
  },
});

export default HealthShortcutsView;