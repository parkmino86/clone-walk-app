import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { IconSymbol, IconSymbolName } from '@/components/ui/icons/IconSymbol';

interface EarningPointsCardItemProps {
  title: string;
  icon: IconSymbolName;
  onPress: () => void;
}

export function EarningPointsCardItem({ title, icon, onPress }: EarningPointsCardItemProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <IconSymbol name={icon} color={Colors.common.primary} style={styles.icon} />
      <TouchableOpacity style={[styles.button, styles.buttonContent]} onPress={onPress}>
        <IconSymbol name="p.circle.fill" color={Colors.common.yellow} style={styles.iconButtonSymbol} />
        <Text style={styles.buttonText}>받기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.common.white,
    borderRadius: 12,
    alignItems: 'center',
    padding: 6,
  },
  cardTitle: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'bold',
    color: Colors.common.deepGrayTextColor,
    marginVertical: 8,
    textAlign: 'center',
  },
  icon: {
    height: 28,
    width: 28,
  },
  iconButtonSymbol: {
    height: 18,
    width: 18,
  },
  button: {
    backgroundColor: Colors.common.primaryAccent,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 8,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  buttonText: {
    color: Colors.common.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default EarningPointsCardItem;