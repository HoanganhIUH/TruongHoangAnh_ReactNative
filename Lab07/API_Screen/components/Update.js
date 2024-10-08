import { Text, SafeAreaView, StyleSheet,View,TouchableOpacity,TextInput,Image,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import React, { useState } from 'react';
// or any files within the Snack

export default function App({navigation}) {
  const [id,setId] = useState('');
  const [content,setContent] = useState('');

  const Update = async()=>
  {
    if (id === '') {
      Alert.alert('Lỗi', 'Vui lòng nhập ID để xóa');
      return;
    }
    try {
      const response = await fetch(`https://66fc9adbc3a184a84d17768f.mockapi.io/ToDo/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
         },
        body: JSON.stringify({
        content: content,
         }), });  
      if (response.ok) {
        Alert.alert('Thành công', 'Dữ liệu đã được cập nhật');
      } else {
        Alert.alert('Lỗi', 'Không thể cập nhật dữ liệu');
      }
    } catch (error) {
      Alert.alert('Lỗi', 'Đã xảy ra lỗi trong quá trình cập nhật dữ liệu');
    }
  }

  return (
      <View style={{paddingHorizontal:20,gap:30}}>
     <Image source={require("../assets/Container14.png")}/>
     <Text  style={{textAlign:'center',fontSize:24,fontWeight:'bold',color:'#8353E2'}}>ADD YOUR JOB</Text>
     <View style={{flexDirection:'row',gap:10,borderWidth:1}}>
     <View style={{padding:10}}><Image source={require("../assets/Frameicon.png")} style={{padding:10}}/></View>    
     <TextInput placeholder="input id" style={{flex:1,padding:10}} onChangeText={setId} />
     </View>
      <View style={{flexDirection:'row',gap:10,borderWidth:1}}>
     <View style={{padding:10}}><Image source={require("../assets/Frameicon.png")} style={{padding:10}}/></View>    
     <TextInput placeholder="input new text" style={{flex:1,padding:10}} onChangeText={setContent} />
     </View>
      <TouchableOpacity style={{backgroundColor:'#00BDD6',padding:20,borderRadius:12}}  onPress={() => { Update(); navigation.navigate('Home');}}>
    <Text style={{textAlign:'center',fontSize:24,fontWeight:'bold',color:'#ffffff',}}> Update-></Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
});
