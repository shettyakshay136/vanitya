import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const App = () => {
  const [sourceLanguage, setSourceLanguage] = useState(null);
  const [targetLanguage, setTargetLanguage] = useState(null);

  const languages = [
    {code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png'},
    {code: 'hi', name: 'Hindi', flag: 'https://flagcdn.com/w40/in.png'},
    {code: 'te', name: 'Telugu', flag: 'https://flagcdn.com/w40/in.png'},
    {code: 'ta', name: 'Tamil', flag: 'https://flagcdn.com/w40/in.png'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Vāṇītyā</Text>
      </View>

      {/* Language Selection */}
      <View style={styles.section}>
        <Text style={styles.headerTitle}>Select Language</Text>
        <Text style={styles.sectionTitle}>From</Text>
        <View style={styles.grid}>
          {languages.map(lang => (
            <TouchableOpacity
              key={`source-${lang.code}`}
              style={[
                styles.languageBox,
                sourceLanguage === lang.code && styles.selectedBox,
              ]}
              onPress={() => setSourceLanguage(lang.code)}>
              <Text style={styles.languageText}>{lang.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>To</Text>
        <View style={styles.grid}>
          {languages.map(lang => (
            <TouchableOpacity
              key={`target-${lang.code}`}
              style={[
                styles.languageBox,
                targetLanguage === lang.code && styles.selectedBox,
              ]}
              onPress={() => setTargetLanguage(lang.code)}>
              <Text style={styles.languageText}>{lang.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Continue Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.button,
            sourceLanguage && targetLanguage
              ? styles.buttonActive
              : styles.buttonDisabled,
          ]}
          disabled={!sourceLanguage || !targetLanguage}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#121212', paddingTop: 40},
  header: {alignItems: 'center', marginBottom: 20},
  headerText: {fontSize: 22, color: '#FFFFFF', fontWeight: 'bold'},
  headerTitle: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  section: {padding: 16},
  sectionTitle: {color: '#bbb', fontSize: 14, marginBottom: 10},
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
    paddingVertical: 30,
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
