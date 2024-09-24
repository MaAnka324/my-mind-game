import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from '../img/Icon';

const initialLevels = [
  {
    cards: ['rocket', 'boy', 'nlo', 'rocket', 'boy', 'nlo'],
    background: 'galaxy_bg'
  },
  {
    cards: ['blue', 'yellow', 'purple', 'blue', 'yellow', 'purple'],
    background: 'bg'
  },
  {
    cards: ['drink1', 'drink2', 'drink3', 'drink1', 'drink2', 'drink3'],
    background: 'drink_bg'
  },
  {
    cards: ['rob1', 'rob2', 'rob3', 'rob4', 'rob5', 'rob6', 'rob1', 'rob2', 'rob3', 'rob4', 'rob5', 'rob6'],
    background: 'rob_bg'
  },
  {
    cards: ['god1', 'build', 'god1', 'build'],
    background: 'god_bg'
  },
  {
    cards: ['tig1', 'tig2', 'tig3', 'tig4', 'tig1', 'tig2', 'tig3', 'tig4'],
    background: 'tiger_bg'
  },
  {
    cards: ['sw1', 'sw2', 'sw3', 'sw4', 'sw5', 'sw6', 'sw1', 'sw2', 'sw3', 'sw4', 'sw5', 'sw6'],
    background: 'sw_bg'
  },
  {
    cards: ['dog1', 'dog2', 'dog3', 'dog4', 'dog1', 'dog2', 'dog3', 'dog4'],
    background: 'dog_bg'
  }
];

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const MemoryGame = ({ navigation }: any) => {
  const [levels, setLevels] = useState(initialLevels);
  const [level, setLevel] = useState(0);
  const [cards, setCards] = useState(shuffleArray([...levels[level].cards]));
  const [openedCards, setOpenedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [showAllCards, setShowAllCards] = useState(true);

  useEffect(() => {
    // Shuffle levels on component mount
    setLevels(shuffleArray(initialLevels));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAllCards(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [cards]);

  useEffect(() => {
    setCards(shuffleArray([...levels[level].cards]));
    setOpenedCards([]);
    setMatchedCards([]);
    setShowAllCards(true);
  }, [level, levels]);

  const handleCardPress = (index: number) => {
    if (openedCards.length === 2 || matchedCards.includes(index) || showAllCards) return;
  
    setOpenedCards((prev) => [...prev, index]);
  
    if (openedCards.length === 1) {
      const firstIndex = openedCards[0];
  
      if (cards[firstIndex] === cards[index]) {
        setMatchedCards((prev) => [...prev, firstIndex, index]);
  
        setOpenedCards([]);

        if (matchedCards.length + 2 === cards.length) {
          if (level < levels.length - 1) {
            setTimeout(() => {
              const nextLevel = level + 1;
              setLevel(nextLevel);
            }, 0); 
          } else {
            alert('Поздравляем! Вы завершили все уровни!');
          }
        }
      } else {
        setTimeout(() => {
          setOpenedCards([]);
        }, 1000);
      }
    }
  };
  

  const getCardSize = () => {
    const numCards = cards.length;
    if (numCards <= 6) {
      return { width: 150, height: 150 };
    } else if (numCards <= 8) {
      return { width: 120, height: 120 };
    } else {
      return { width: 100, height: 100 };
    }
  };

  const cardSize = getCardSize();

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#43BCF0', '#571280']} style={styles.header}>
        <View style={styles.levelContainer}>
          <Text style={styles.levelText}>{level + 1}/8</Text>
        </View>
      </LinearGradient>

      <View style={styles.backgroundImage}>
        <Icon icon={levels[level].background} size={1000} />
      </View>

      <View style={styles.gameContainer}>
        {cards.map((card, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCardPress(index)}
            style={[
              styles.card,
              openedCards.includes(index) || matchedCards.includes(index) || showAllCards
                ? styles.openedCard
                : styles.closedCard,
              { width: cardSize.width, height: cardSize.height }
            ]}
          >
            {openedCards.includes(index) || matchedCards.includes(index) || showAllCards ? (
              <Icon icon={card} size={cardSize.width * 0.7} />
            ) : (
              <Icon icon="closedCard" size={cardSize.width} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  header: {
    height: 102,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelContainer: {
    backgroundColor: '#00FFB2',
    width: 48,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: -270,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  gameContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  card: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  closedCard: {
    backgroundColor: '#ccc',
  },
  openedCard: {
    backgroundColor: '#2E2B42',
  },
});

export default MemoryGame;
