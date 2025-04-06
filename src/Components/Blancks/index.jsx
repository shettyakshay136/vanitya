import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const QuestionScreen = ({data, onAnswer}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [showCorrect, setShowCorrect] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const correctAnswer = data.correct_answer;

  const options = data.answer_options.map((item, index) => ({
    telugu: item,
    hindi: data.answer_options_transliterated[index],
  }));

  const handleSelect = option => {
    if (disabled) return;

    const isCorrect = option.telugu.trim() === correctAnswer.trim();
    setSelectedOption(option.telugu);

    if (isCorrect) {
      setShowCorrect(true);
      setDisabled(true);
      setTimeout(() => {
        onAnswer(); 
      }, 1500);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= 3) {
        setShowCorrect(true);
        setDisabled(true);
        setTimeout(() => {
          onAnswer();
        }, 1500);
      } else {
        setTimeout(() => {
          setSelectedOption(null);
        }, 800);
      }
    }
  };

  const resetState = () => {
    setSelectedOption(null);
    setAttempts(0);
    setShowCorrect(false);
    setDisabled(false);
  };

  const renderQuestionText = text => {
    const parts = text.split(/(?:\*?__\*?)/);
    const blanks = text.match(/(?:\*?__\*?)/g) || [];

    return (
      <Text style={styles.questionText}>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            <Text>{part}</Text>
            {index < blanks.length && <Text style={styles.blank}>_____</Text>}
          </React.Fragment>
        ))}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        {renderQuestionText(data.original_question)}
        {renderQuestionText(data.transliterated_question)}
      </View>

      <View style={styles.optionsGrid}>
        {options.map((option, index) => {
          const isCorrect = option.telugu === correctAnswer;
          const isSelected = selectedOption === option.telugu;

          let backgroundColorStyle = styles.optionCard;
          let textStyle = styles.optionText;

          if (showCorrect && isCorrect) {
            backgroundColorStyle = styles.correctOption;
            textStyle = styles.selectedText;
          } else if (isSelected && !isCorrect) {
            backgroundColorStyle = styles.wrongOption;
            textStyle = styles.selectedText;
          } else if (isSelected && isCorrect) {
            backgroundColorStyle = styles.correctOption;
            textStyle = styles.selectedText;
          }

          return (
            <TouchableOpacity
              key={index}
              style={[styles.optionCard, backgroundColorStyle]}
              onPress={() => handleSelect(option)}
              disabled={disabled}>
              <Text style={textStyle}>{option.telugu}</Text>
              <Text style={textStyle}>{option.hindi}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  blank: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionCard: {
    backgroundColor: '#2A2A2A',
    padding: 12,
    margin: 8,
    borderRadius: 8,
    alignItems: 'center',
    width: '45%',
  },
  correctOption: {
    backgroundColor: '#1DB954',
  },
  wrongOption: {
    backgroundColor: '#FF3B30',
  },
  optionText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  selectedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default QuestionScreen;
