import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/icons/IconSymbol';
import { Colors } from '@/constants/Colors';

type HeaderProps = {
  points: number;
};

export function HomeHeaderView({ points }: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.pointContainer}>
        <IconSymbol name="p.circle.fill" size={28} color={Colors.common.yellow} />
        <Text style={styles.pointText}>{points.toLocaleString()}p</Text>
      </View>
      <View style={styles.headerIcons}>
        <IconSymbol name="bell.fill" size={24} color="#000000" style={styles.iconMargin} />
        <IconSymbol name="gearshape.fill" size={24} color="#000000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Colors.common.padding,
  },
  pointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointText: {
    fontSize: 28,
    color: '#000000',
    marginLeft: 4,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginRight: 16,
  },
});
