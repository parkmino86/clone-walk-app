import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { IconSymbol } from '@/components/ui/icons/IconSymbol';

type EarningShortcutsCardItemProps = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export function EarningShortcutsCardItem({
  id,
  title,
  description,
  icon,
}: EarningShortcutsCardItemProps) {
  return (
    <TouchableOpacity key={id} style={styles.card}>
      <IconSymbol name={icon} size={36} color={Colors.common.primary} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {description.split(/<p>|<\/p>/g).map((part, index) =>
            index % 2 === 1 ? (
              <Text key={index} style={styles.highlight}>
                {part}
              </Text>
            ) : (
              part
            )
          )}
        </Text>
      </View>
      <View style={styles.arrowContainer}>
        <IconSymbol name="chevron.right" size={16} color={Colors.common.lightGray} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.common.textColor,
  },
  description: {
    fontSize: 14,
    fontWeight: '300',
    color: Colors.common.deepGrayTextColor,
    marginTop: 4,
  },
  highlight: {
    color: Colors.common.primaryAccent,
    fontWeight: '500',
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});