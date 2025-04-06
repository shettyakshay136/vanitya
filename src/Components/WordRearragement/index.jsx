import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const QuestionScreen = ({data, onAnswer}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const correctAnswer = data.answer_options.map(item => item.trim());

  const options = data.answer_options.map((item, index) => ({
    telugu: item,
    hindi: data.answer_options_transliterated[index],
  }));

  const handleSelect = option => {
    if (selectedOptions.find(o => o.telugu === option.telugu)) return;

    const newSelection = [...selectedOptions, option];
    setSelectedOptions(newSelection);

    if (newSelection.length === correctAnswer.length) {
      const selectedTelugu = newSelection.map(opt => opt.telugu.trim());
      const isCorrect = selectedTelugu.every(
        (item, index) => item === correctAnswer[index],
      );

      if (isCorrect) {
        setTimeout(() => {
          setIsWrong(false);
          setAttempts(0);
          setIsCorrect(true);
          setSelectedOptions([]);
          onAnswer(); 
        }, 500);
      } else {
        setIsWrong(true);
        setIsCorrect(false);
        const newAttemptCount = attempts + 1;
        setAttempts(newAttemptCount);

        if (newAttemptCount >= 3) {
          setTimeout(() => {
            setIsWrong(false);
            setSelectedOptions([]);
            onAnswer(); 
          }, 1000);
        } else {
          setTimeout(() => {
            setIsWrong(false);
            setSelectedOptions([]);
          }, 1000);
        }
      }
    }
  };


  const handleRemove = index => {
    setSelectedOptions(selectedOptions.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{data.original_question}</Text>
        <Text style={styles.transliterationText}>
          {data.transliterated_question}
        </Text>
      </View>

      <View style={styles.selectedInlineContainer}>
        {selectedOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.selectedInlineChip}
            onPress={() => handleRemove(index)}>
            <Text style={styles.selectedText}>{option.telugu}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{borderBottomWidth: 1, borderBottomColor: '#2A2A2A'}}></View>

      <View style={styles.optionsGrid}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionCard}
            onPress={() => handleSelect(option)}>
            <Text style={styles.optionText}>{option.telugu}</Text>
            <Text style={styles.transliteration}>{option.hindi}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.selectedContainer}>
        <Text style={styles.label}>Selected Order:</Text>
        <View style={styles.selectedOptions}>
          {selectedOptions.map((option, index) => (
            <View
              key={index}
              style={{flexDirection: 'column', alignItems: 'center'}}>
              <TouchableOpacity
                style={[
                  styles.selectedChip,
                  {backgroundColor: isWrong ? '#AA0000' : '#1D8954'},
                ]}
                onPress={() => handleRemove(index)}>
                <Text style={styles.selectedText}>{option.telugu}</Text>
              </TouchableOpacity>
              <Text style={{color: 'white'}}>({index + 1})</Text>
            </View>
          ))}
        </View>
      </View>

      {(attempts >= 3 || isCorrect) && (
        <View style={styles.correctAnswerContainer}>
          <Text style={styles.correctAnswerLabel}>Correct Answer:</Text>
          <Text style={styles.correctAnswerText}>{data.correct_answer}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    paddingHorizontal: 16,
    height: '100%',
  },
  header: {alignItems: 'center', marginBottom: 20},
  headerText: {fontSize: 22, color: '#FFFFFF', fontWeight: 'bold'},
  questionContainer: {marginBottom: 20},
  questionText: {fontSize: 20, color: '#FFFFFF', marginBottom: 8},
  transliterationText: {fontSize: 16, color: '#E0E0E0'},
  selectedInlineContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  selectedInlineChip: {
    backgroundColor: '#2A2A2A',
    padding: 8,
    borderRadius: 8,
    marginRight: 5,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  optionCard: {
    backgroundColor: '#2A2A2A',
    padding: 12,
    margin: 8,
    borderRadius: 8,
    alignItems: 'center',
    width: '45%',
  },
  optionText: {fontSize: 16, color: '#FFFFFF'},
  transliteration: {fontSize: 14, color: '#E0E0E0'},
  selectedContainer: {
    borderTopWidth: 1,
    borderColor: '#333333',
    marginTop: 20,
    paddingTop: 10,
  },
  label: {fontSize: 14, color: '#E0E0E0', marginBottom: 5},
  selectedOptions: {flexDirection: 'row', flexWrap: 'wrap'},
  selectedChip: {
    // backgroundColor: '#1DB954',
    padding: 10,
    borderRadius: 8,
    margin: 5,
  },
  selectedText: {color: '#FFFFFF'},
  correctAnswerContainer: {marginTop: 20},
  correctAnswerLabel: {fontSize: 14, color: '#E0E0E0'},
  correctAnswerText: {fontSize: 16, color: '#FFFFFF', marginTop: 5},
});

export default QuestionScreen;
