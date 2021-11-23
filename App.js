import * as React from 'react';
import Youtube from './src/Youtube/index';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';


function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Youtube />
    </SafeAreaView>
  );
}

export default App;
