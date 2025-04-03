import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const App = () => {
  const [sourceLanguage, setSourceLanguage] = useState(null);
  const [targetLanguage, setTargetLanguage] = useState(null);
  const [difficultyLevel, setDifficultyLevel] = useState(null);

  const languages = [
    {code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png'},
    {code: 'hi', name: 'Hindi', flag: 'https://flagcdn.com/w40/in.png'},
    {code: 'te', name: 'Telugu', flag: 'https://flagcdn.com/w40/in.png'},
    {code: 'ta', name: 'Tamil', flag: 'https://flagcdn.com/w40/in.png'},
  ];

  const difficultyLevels = ['Beginner', 'Intermediate', 'Advanced'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Vāṇītyā</Text>
      </View>

      {/* Difficulty Level Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Difficulty :</Text>
        <View style={styles.grid}>
          {difficultyLevels.map(level => (
            <TouchableOpacity
              key={level}
              style={[
                styles.languageBox,
                difficultyLevel === level && styles.selectedBox,
              ]}
              onPress={() => setDifficultyLevel(level)}>
              <Text style={styles.languageText}>{level}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Continue Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.button,
            difficultyLevel ? styles.buttonActive : styles.buttonDisabled,
          ]}
          disabled={!difficultyLevel}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#111', paddingTop: 40},

  header: {alignItems: 'center', marginBottom: 20},
  headerText: {fontSize: 22, color: '#FFFFFF', fontWeight: 'bold'},
  headerTitle: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  section: {padding: 16},
  sectionTitle: {color: '#fff', marginBottom: 20, fontSize: 25},
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  languageBox: {
    width: '48%',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#222',
    borderRadius: 8,
    marginBottom: 10,
    paddingVertical: 50,
  },
  selectedBox: {backgroundColor: '#1DB954'},
  flag: {width: 40, height: 40, marginBottom: 5},
  languageText: {color: '#fff', fontSize: 14},
  divider: {height: 1, backgroundColor: '#333', marginVertical: 10},
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: '#222',
  },
  button: {width: '100%', padding: 14, borderRadius: 8, alignItems: 'center'},
  buttonActive: {backgroundColor: '#1DB954'},
  buttonDisabled: {backgroundColor: '#555'},
  buttonText: {color: '#fff', fontSize: 16, fontWeight: 'bold'},
});

export default App;
