import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { IconSymbol, IconSymbolName } from '@/components/ui/icons/IconSymbol';

type HealthShortcutsCardItemProps = {
  title: string;
  description: string;
  icon: IconSymbolName;
};

export function HealthShortcutsCardItem({
  title,
  description,
  icon,
}: HealthShortcutsCardItemProps) {
  return (
    <TouchableOpacity style={styles.card}>      
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <IconSymbol name={icon} size={48} color={Colors.common.primary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.common.white,
    borderRadius: 24,
    padding: 16,
    marginBottom: 12,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.common.deepGrayTextColor,
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.common.textColor,
    marginTop: 4,
  },
});