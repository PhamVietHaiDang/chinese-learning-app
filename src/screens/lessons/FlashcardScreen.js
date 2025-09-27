import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const flashcards = [
  { question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
  { question: 'What is JSX?', answer: 'A syntax extension for JavaScript that looks like XML.' },
  // Add more flashcards here
];

export default function FlashcardScreen() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setShowAnswer(false);
    setIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {showAnswer ? flashcards[index].answer : flashcards[index].question}
      </Text>
      <Button title={showAnswer ? 'Next' : 'Show Answer'} onPress={() => {
        if (showAnswer) nextCard();
        else setShowAnswer(true);
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  text: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
});
