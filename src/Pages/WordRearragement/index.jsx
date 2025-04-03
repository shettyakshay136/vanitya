import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

const QuestionScreen = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    {telugu: 'నాకు', hindi: 'नाकु'},
    {telugu: 'నేర్చుకోవడం', hindi: 'नेर्चुकोवडं'},
    {telugu: 'ఇష్టం', hindi: 'इష్టं'},
    {telugu: 'తెలుగు', hindi: 'तॆలుగु'},
  ];

  const handleSelect = option => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const handleRemove = index => {
    setSelectedOptions(selectedOptions.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Vanitya</Text>
      </View>

      {/* Question Section */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>నాకు నేర్చుకోవడం ఇష్టం తెలుగు</Text>
        <Text style={styles.transliterationText}>
          नाकु नेर्चुकोवडं इष्टं तॆలుగु
        </Text>
      </View>

      {/* Selected Options Inline */}
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

      {/* Answer Options */}
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

      {/* Selected Options */}
      <View style={styles.selectedContainer}>
        <Text style={styles.label}>Selected Options:</Text>
        <View style={styles.selectedOptions}>
          {selectedOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.selectedChip}
              onPress={() => handleRemove(index)}>
              <Text style={styles.selectedText}>{option.telugu}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Continue Button at Bottom */}
      <View style={styles.continueButtonContainer}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
    paddingTop: 40,
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
    backgroundColor: '#1DB954',
    padding: 10,
    borderRadius: 8,
    margin: 5,
  },
  selectedText: {color: '#FFFFFF'},
  correctAnswerContainer: {marginTop: 20},
  correctAnswerLabel: {fontSize: 14, color: '#E0E0E0'},
  correctAnswerText: {fontSize: 16, color: '#FFFFFF', marginTop: 5},
  continueButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },
  continueButton: {
    backgroundColor: '#1DB954',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueButtonText: {fontSize: 16, color: '#FFFFFF', fontWeight: 'bold'},
});

export default QuestionScreen;
