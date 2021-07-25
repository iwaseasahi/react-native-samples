import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Detail() {
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
