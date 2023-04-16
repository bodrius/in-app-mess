import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import inAppMessaging from '@react-native-firebase/in-app-messaging';

const App = () => {
  async function onSetup() {
    // Allow user to receive messages now setup is complete
    inAppMessaging().setMessagesDisplaySuppressed(false);
  }

  useEffect(() => {
    onSetup();
  }, []);

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
