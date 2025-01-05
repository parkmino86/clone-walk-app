import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Colors } from '@/constants/Colors';
import { EarningPointsCardItem } from '@/components/ui/cardItem/EarningPointsCardItem';

export function EarningPointsView() {
  const cards = [
    { id: 1, title: 'OX 건강퀴즈', icon: 'questionmark.circle' },
    { id: 2, title: '머니팜', icon: 'leaf' },
    { id: 3, title: '선착순 미션', icon: 'alarm' },
    { id: 4, title: '포인트 뒤집기', icon: 'p.circle.fill' },
  ];

  const handlePress = (title: string) => {
    Alert.alert(`${title}`, '포인트를 성공적으로 적립했습니다!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>즉시 바로 적립</Text>
      <View style={styles.cardsContainer}>
        {cards.map((card) => (
          <View style={styles.cardWrapper} key={card.id}>
            <EarningPointsCardItem
              title={card.title}
              icon={card.icon}
              onPress={() => handlePress(card.title)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.common.black,
    marginBottom: 16,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  cardWrapper: {
    width: '23%',
    marginHorizontal: '1%',
    marginBottom: 16,
  },
});

export default EarningPointsView;
