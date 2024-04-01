import React, { useState } from "react";
import {StyleSheet, View, FlatList, Text } from 'react-native';

const styles= StyleSheet.create({
   container: {flex:1},
   item: {padding:10, fontSize:16, height:46}
})

export default function FlatListBasic() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:30, padding:15,fontWeight: 'bold' }}>내가 좋아하는 과일</Text>
          <FlatList
            data={[
                {key:'Apple'},{key:'Banana'},{key:'Cherry'},{key:'Orange'},{key:'Mango'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        </View>
    );
}