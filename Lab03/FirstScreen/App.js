import React from 'react';
import {Text, View,TouchableOpacity,Image} from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:"skyblue",
      }}>
      <View
        style={{
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"skyblue",
        }}>
        
           <Image
           source={require('./assets/Ellipse 8.png')} 
            style={{width: 200, height: 200}}
        />
        </View>
      
        <View
        style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"skyblue",
        }}>
        
          <Text 
              style={{
             fontSize:20,     
            fontWeight:"bold",
            color:"black",
               textAlign:"center",
             }}>
             GROW {"\n"} YOUR BUSINESS
           </Text>
        </View>
        <View
        style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"skyblue",
        }}>
        
          <Text 
             style={{
               fontSize:14,     
               fontWeight:"bold",
               color:"black",
               textAlign:"center",
             }}>
             We wil help you to grow your business using {"\n"} online server
           </Text>
        </View>
        <View
        style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:"skyblue",
        }}>
        
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'yellow',
            padding: 10,
            marginHorizontal: 30,
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'yellow',
            padding: 10,
            marginHorizontal: 30,
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>SIGN UP</Text>
        </TouchableOpacity>
        </View>
        <View
        style={{
        flex: 1,
        backgroundColor:"skyblue",
        }}>
        </View>
    </View>
  );
};

export default YourApp;