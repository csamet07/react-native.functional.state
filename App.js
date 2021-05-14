/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  FlatList,
  Switch
} from 'react-native';

const data = [
  { id:0, name:'cafe.exe', isFavorite: true },
  { id:1, name:'KafaKafe', isFavorite: false },
  { id:2, name:'bugG', isFavorite: false },
  { id:3, name:"rock'n code", isFavorite: true },
  { id:4, name:'do(drink)', isFavorite: false },
  { id:5, name:'esc', isFavorite: false }
]

const App = () => {
  const [cafeList, setCafeList] = useState(data);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    if(!isEnabled){
      setCafeList(cafeList.filter(x=>x.isFavorite));
    }else{
      setCafeList(data);
    }
  }

  const renderItem = ({ item }) => (
    <Text style={{ fontSize: 25}}>
      {item.name}
    </Text>
  );


  return (
    <View>
    <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

    <FlatList
      data={cafeList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
    </View>
  )
}

export default App;