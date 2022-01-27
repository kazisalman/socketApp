/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import ChatRoom from './ChatRoom';


const App =  () => {
  
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}> 
    <ChatRoom />
    {/* <Text>asd</Text> */}
    </SafeAreaView>
  );
};



export default App;
