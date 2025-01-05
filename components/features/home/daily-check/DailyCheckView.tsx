import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, StyleProp, ViewStyle } from 'react-native';
import { Colors } from '@/constants/Colors';
import { IconSymbol } from '@/components/ui/icons/IconSymbol';

interface DailyCheckBannerViewProps {
  style?: StyleProp<ViewStyle>;
}

export function DailyCheckBannerView({ style }: DailyCheckBannerViewProps) {
  const handlePress = () => {
    Alert.alert('출석 체크 완료!', '오늘의 출석이 성공적으로 기록되었습니다.');
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.card} onPress={handlePress}>
        <View style={styles.iconContainer}>
          <IconSymbol name="calendar" size={28} color={Colors.common.primaryAccent} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.highlightText}>아맞다 출석체크!</Text>
          <Text style={styles.normalText}>얼른 출석하기</Text>
        </View>
        <View style={styles.arrowContainer}>
          <IconSymbol name="chevron.right" size={16} color={Colors.common.gray} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.common.white,
    borderRadius: 16,
    padding: 24,
    width: '100%',
  },
  iconContainer: {
    marginRight: 4,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  highlightText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.common.primaryAccent,
  },
  normalText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.common.black,
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 18,
    color: Colors.common.gray,
  },
});

export default DailyCheckBannerView;