import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView, StyleSheet,TouchableOpacity,TextInput,Image } from 'react-native';
const UsersScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://6459e20f95624ceb21f19300.mockapi.io/truonghoanganh') 
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  const renderItem = ({item}) =>(
    <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#DEE1E678',borderRadius:15}}>
    <Image source={require('../assets/complete.png')} />
    <Text>{item.content}</Text>
    <Image source={require('../assets/delete.png')} />
    </View>
  )
  return (
    <View style={{alignItems:'center',gap:20}}>
    <Image source={require('../assets/Container14.png')} />
    <TextInput placeholder='Sreach' style={{borderWidth:1,paddingHorizontal:50,padding:10,borderRadius:5}} />
    <View style={{height:300,width:300}}>
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    />
    </View>
    <TouchableOpacity style={{backgroundColor:'#00BDD6',width:50,height:50,borderRadius:50,alignItems:'center',justifyContent:'center'}}   onPress={() => navigation.navigate('Add')}>
    <Image source={require('../assets/cross.png')} />
    </TouchableOpacity>
  </View>
  );
};

export default UsersScreen;
