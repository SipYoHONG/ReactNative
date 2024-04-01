import React, { useEffect, useState } from "react";
import {View, FlatList, Text, ActivityIndicator } from 'react-native';

export default function FetchExample() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
        .then(res => res.json())
        .then(obj => {
//          console.log(obj);       // {title, releaseYear}, Postman으로 확인함.
            setData(obj.movies);    // <- title,releaseYear로 구성되어있음!
        })
        .catch(error => {console.error(error);})
        .finally(setLoading(false));
    }, []);
    return (
        <View style={{flex:1, padding:10}}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({id}) => id}
                    renderItem={({item}) => (
                        <Text>{item.title}, {item.releaseYear}</Text>
                    )}
                />
            )}
        </View>
    );
}