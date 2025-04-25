import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={homeStyles.container}>
      <Text
        style={homeStyles.homeText}>
        Welcome to Little Lemon
      </Text>
      <Text
        style={homeStyles.desciptionText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  desciptionText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },

});