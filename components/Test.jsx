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
  listItem: {
    marginTop: 10,
    padding: 10,
    fontSize: 18,
  },
});

export default function Test() {
    const [fruitList, setFruitList] = useState([]);
    const [fruit, setFruit] = useState('');
    const addFruit = () => {
      if(fruit.trim().length !== 0)
        setFruitList([...fruitList, fruit.trim()]);
        setFruit('');
        setTimeout(() => inputRef.current.focus(), 10);
      }
    const inputRef = useRef(null);

    return (
        <View style={styles.container}>
            <Image
              style={styles.image} 
              source={{uri:'https://picsum.photos/200/200'}}
            />
            <TextInput 
              style={styles.input}
              placeholder="과일 이름을 입력하세요."
              onChangeText={newText => setFruit(newText)}
              value={fruit}
              ref={inputRef}
              onSubmitEditing={addFruit}
            />
            <FlatList 
              data={fruitList}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
            />
      </View>
    );
  }