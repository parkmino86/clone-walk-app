import React from 'react';
import { View } from 'react-native';
import { EarningShortcutsCardItem } from '@/features/home/earning-shortcuts/EarningShortcutsCardItem';
import { Colors } from '@/constants/Colors';

export function EarningShortcutsView() {
  const shortcuts = [
    { id: 1, title: '1:1 걷기 배틀', description: '딱 3일 겨루고 <p>최대 1,000 포인트</p>', icon: 'figure.walk.motion' },
    { id: 2, title: '식단 기록', description: '작성하면 <p>최대 20 포인트</p>', icon: 'fork.knife.circle.fill' },
    { id: 3, title: '출석체크', description: '연속 달성하고 <p>최대 1,000 포인트</p>', icon: 'calendar' },
    { id: 4, title: '챌린지', description: '지금까지 상금 <p>누적 30,203,302 포인트</p>', icon: 'target' },
    { id: 5, title: '머니복권', description: '매주 1등 당첨금 <p>10,000,000 포인트</p>', icon: 'basketball.fill' },
  ];

  return (
    <View>
      {shortcuts.map((shortcut) => (
        <EarningShortcutsCardItem
          key={shortcut.id}
          id={shortcut.id}
          title={shortcut.title}
          description={shortcut.description}
          icon={shortcut.icon}
        />
      ))}
    </View>
  );
}

export default EarningShortcutsView;