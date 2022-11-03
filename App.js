import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './components/title'
import Main from './components/main'

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});