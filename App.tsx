import { View, Text , SafeAreaView } from 'react-native'
import React from 'react'
import { Approutes } from './src/Navigation/Approutes'

import Languages from './src/Pages/Language'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Approutes />
    </SafeAreaView>
  );
}

export default App