import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF', 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%', 
  },
  countText: {
    fontSize: 40,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF', 
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    borderRadius: 5, 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default function Counter() {
  const [count, setCount] = useState(0); 

  return (
    <View style={styles.container}>
    <Text style={styles.countText}>{count}</Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 1)}
          disabled={count >= 10}>
        <Text style={styles.buttonText}>증가하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(1)}>
          <Text style={styles.buttonText}>리셋</Text>
        </TouchableOpacity>
    </View>
  </View>
);
};