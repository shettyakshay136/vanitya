import { View, Text , SafeAreaView } from 'react-native'
import React from 'react'
import { Approutes } from './src/Navigation/Approutes'

const App = () => {
  return (
    <SafeAreaView>
      <Approutes />
    </SafeAreaView>
  );
}

export default App