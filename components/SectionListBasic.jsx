import React from "react";
import {StyleSheet, View, SectionList, Text } from 'react-native';

const styles= StyleSheet.create({
   container: {flex:1},
   sectionHeader: {
    paddingTop: 2, paddingRight: 10, paddingBottom: 2, paddingLeft: 10,
    fontSize: 16, fontWeight: 'bold', backgroundColor: 'rgba(247,247,247,1.0)',
   },
   item: { padding:5, fontSize:16, height:40 },
})

export default function SectionListBasic() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:30, padding:15,fontWeight:'bold'}}>내가 좋아하는 과일</Text>
          <SectionList
            sections={[
                {title:'토종', data:['사과','감','배']},
                {title:'수입', data:['Banana','Mango','Orange']}
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => (
                <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            keyExtractor={item => `basicListEntry-${item}`}
        />
        </View>
    );
}