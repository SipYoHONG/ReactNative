import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    width: '60%',
  },
  countText: {
    fontSize: 40,
    marginBottom: 20,
  },
});

export default function Counter() {
  const [count, setCount] = useState(0); 

  return (
    <View style={styles.container}>
    <Text style={styles.countText}>{count < 5 ? '으쨔!' : '멈춰!!'}</Text>
    <View style={styles.buttonContainer}>
      <Button 
        onPress={() => setCount(count + 1)} 
        title="증가하기" 
        disabled={count >= 5}
      />
      <Button 
        onPress={() => setCount(0)} 
        title="리셋" 
      />
    </View>
  </View>
);
};
