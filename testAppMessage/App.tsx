import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.text}>HELLO!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cadetblue',
  },

  text: {
    fontSize: 34,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 18,
  },
});

export default App;
