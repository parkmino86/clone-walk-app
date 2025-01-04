import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/icons/IconSymbol';
import { Colors } from '@/constants/Colors'

type HeaderProps = {
  points: number;
};

export function Header({ points }: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.pointContainer}>
        <IconSymbol name="p.circle.fill" size={28} color={Colors.common.highlightColor} />
        <Text style={styles.pointText}>{points.toLocaleString()}p</Text>
      </View>
      <View style={styles.headerIcons}>
        <IconSymbol name="bell.fill" size={24} color="#000" style={styles.iconMargin} />
        <IconSymbol name="gearshape.fill" size={24} color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginRight: 16,
  },
});