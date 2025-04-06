import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import RearrangementComponent from '../../Components/WordRearragement';
import BlankComponent from '../../Components/Blancks';

import AntDesign from 'react-native-vector-icons/AntDesign';

const questions = [
  {
    source_language: 'Hindi',
    target_language: 'Telugu',
    difficulty: 'Advanced',
    exercise_type: 'word-rearrangement',
    original_question: 'నాకు నేర్చుకోవడం ఇష్టం తెలుగు',
    transliterated_question: 'नाकु नेर्चुकोवडं इష్టं तॆలుగु',
    answer_options: ['నాకు', 'నేర్చుకోవడం', 'ఇష్టం', 'తెలుగు'],
    answer_options_transliterated: ['नाकु', 'नेर्चुकोवडं', 'इष्टं', 'तॆలుగु'],
    correct_answer: 'నాకు తెలుగు నేర్చుకోవడం ఇష్టం',
  },
  {
    source_language: 'Hindi',
    target_language: 'Telugu',
    difficulty: 'Advanced',
    exercise_type: 'fill-in-blank',
    original_question: 'మీరు భారతదేశం *__* వచ్చారా',
    translated_question: null,
    transliterated_question: 'मीरु भारतदेशं *__* वच्चारा',
    answer_options: ['నలుపు', 'పొడవు', 'నుండి', 'ఆలోచించు'],
    answer_options_translated: [null, null, null, null],
    answer_options_transliterated: ['नलुपु', 'पॊडवु', 'नुंडि', 'आलोचिंचु'],
    correct_answer: 'నుండి',
  },
];

const QuestionPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = () => {
    setIsAnswered(true);
  };

  const handleContinue = () => {
    setIsAnswered(false);
    setCurrentIndex(prev => prev + 1);
  };

  console.log('current' , currentIndex)
  console.log('current question', questions.length);

 const renderQuestionComponent = () => {
   if (
     !Array.isArray(questions) ||
     currentIndex === questions.length ||
     !currentQuestion
   ) {
     return (
       <View
         style={{
           flex: 1,
           justifyContent: 'center',
           alignItems: 'center',
           backgroundColor: 'black',
         }}>
         <Text style={{color: 'white'}}>No questions left 🎉</Text>
       </View>
     );
   }

   switch (currentQuestion.exercise_type) {
     case 'word-rearrangement':
       return (
         <RearrangementComponent
           data={currentQuestion}
           onAnswer={handleAnswer}
         />
       );
     case 'fill-in-blank':
       return <BlankComponent data={currentQuestion} onAnswer={handleAnswer} />;
     default:
       return <Text>Unknown question type</Text>;
   }
 };

 if (
   !Array.isArray(questions) ||
   currentIndex === questions.length ||
   !currentQuestion
 ) {
   return (
     <View style={{flex:1 , alignItems:'center', justifyContent:'center', backgroundColor:'black'}}>
       <Text style={{color: 'white'}}>No questions left 🎉</Text>
     </View>
   );
 }




  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{paddingLeft: 20}}
        onPress={
          currentIndex > 0 ? () => setCurrentIndex(currentIndex - 1) : null
        }>
        <AntDesign name="left" size={24} color="white" />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}>
        <Text style={{}}>
          <Text style={{color: '#FFD700', fontWeight: 'bold', fontSize: 20}}>
            {currentIndex + 1}
          </Text>
          <Text style={styles.question}> of 10 Questions</Text>
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#1DB954',
          }}>
          {currentQuestion.exercise_type}
        </Text>
      </View>
      {renderQuestionComponent()}
      <TouchableOpacity
        style={[
          styles.continueBtn,
          {backgroundColor: isAnswered ? '#1DB954' : '#555'},
        ]}
        disabled={!isAnswered}
        onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#121212'},
  question: {
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: 'semi-bold',
    color: '#fff',
    paddingVertical: 10,
  },
  type: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  continueBtn: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#1DB954',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default QuestionPage;
