import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { HapticTab } from '@/components/HapticTab';

export default function HomeScreen() {
  const [points, setPoints] = useState(1585);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 0.9,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
    setPoints(points + 1);
  };

  return (
    <LinearGradient
      colors={['#FEA33C', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View style={styles.pointContainer}>
            <IconSymbol name="p.circle.fill" size={28} color="#FFD700" />
            <Text style={styles.pointText}>{points}p</Text>
          </View>
          <View style={styles.headerIcons}>
            <IconSymbol name="bell.fill" size={24} color="#000" style={styles.iconMargin} />
            <IconSymbol name="gearshape.fill" size={24} color="#000" />
          </View>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>50걸음 당 1포인트</Text>
          <HapticTab onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <Animated.View style={[styles.iconContainer, { transform: [{ scale: scaleAnim }] }]}>
              <IconSymbol name="p.circle.fill" size={120} color="#FFD700" />
            </Animated.View>
          </HapticTab>
          <View style={styles.stepContainer}>
            <Text style={styles.stepNumber}>2,085</Text>
            <Text style={styles.stepText}>걸음</Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  pointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointText: {
    fontSize: 28,
    color: '#000',
    marginLeft: 4,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginRight: 16,
  },
  subtitleContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  subtitleText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '300',
    marginBottom: 12,
  },
  iconContainer: {
    alignItems: 'center',
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  stepNumber: {
    fontSize: 42,
    color: '#000',
    fontWeight: '700',
  },
  stepText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '300',
    marginLeft: 8,
  },
});