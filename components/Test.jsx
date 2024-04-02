import React, { useState, useRef } from "react";
import { View, TextInput, Button, FlatList, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  imageContainer: {
    marginBottom: 20,
    borderRadius: 100,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius:200,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '30%',
  },
  list: {
    width: '30%',
  },
  listItem: {
    marginTop: 10,
    padding: 10,
    fontSize: 18,
  },
});

export default function Test() {
  const [fruit, setFruit] = useState('');
  const [fruitList, setFruitList] = useState([]);
  const inputRef = useRef(null);
  const addFruit = () => {
    if(fruit !== '') {
      setFruitList(prevFruitList => [...prevFruitList, fruit]);
      setFruit('');
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image} 
            source={{uri:'https://picsum.photos/200/200'}}
          />
          </View>
          <TextInput 
            style={styles.input}
            onChangeText={setFruit}
            value={fruit}
            placeholder="과일 이름을 입력하세요."
            ref={inputRef}
            onSubmitEditing={addFruit}
          />
          <FlatList 
            style={styles.list}
            data={fruitList}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
          />
      
    </View>
  );
}
