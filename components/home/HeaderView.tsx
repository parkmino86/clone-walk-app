import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/icons/IconSymbol';
import { Colors } from '@/constants/Colors';

type HeaderProps = {
  points: number;
};

export function Header({ points }: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.pointContainer}>
        <IconSymbol
          name="p.circle.fill"
          size={styles.iconSizes.pointIcon}
          color={styles.iconColors.highlight}
        />
        <Text style={styles.pointText}>{points.toLocaleString()}p</Text>
      </View>
      <View style={styles.headerIcons}>
        <IconSymbol
          name="bell.fill"
          size={styles.iconSizes.headerIcon}
          color={styles.iconColors.default}
          style={styles.iconMargin}
        />
        <IconSymbol
          name="gearshape.fill"
          size={styles.iconSizes.headerIcon}
          color={styles.iconColors.default}
        />
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
  iconSizes: {
    pointIcon: 28,
    headerIcon: 24,
  },
  iconColors: {
    highlight: Colors.common.highlightColor,
    default: '#000000',
  },
});