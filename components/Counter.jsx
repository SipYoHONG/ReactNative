import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0); 
  
  const handleClick = () => {
    if(count < 5) {
      setCount(count + 1);
    }
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    countText: {
      fontSize: 40,
      marginBottom: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <Button 
        onPress={handleClick} 
        title="증가하기" 
        disabled={count >= 5}
      />
    </View>
  );
};
