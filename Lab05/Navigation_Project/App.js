import React from 'react';
import {Text, View,TouchableOpacity,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";


function HomeScreen({ navigation }) {
  const router = useRoute();
  const { selectedColor } = router.params || { selectedColor: "blue" };
  const images = {
    blue: require("./assets/vs_blue.png"),
    red: require("./assets/vs_red.png"),
    black: require("./assets/vs_black.png"),
    silver: require("./assets/vs_silver.png"),
  };
  return (
    <View style={{
      backgroundColor : 'white',
      borderRadius : 10,
      padding : 16,
      marginBottom : 16,
      height:"100%"}}>
    <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={images[selectedColor]}/>
      </View>
    <View style={{marginTop: 16,}}>
      <Text style={{fontSize: 18,fontWeight: 'bold',}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',width:300,marginTop:10}}> 
      <View style={{flexDirection: 'row',marginTop: 8,marginRight:20}}>
      <Image
      source={require('./assets/star.png')} 
      style={{color: '#E0E41A',marginBottom: 8,width: 23,height: 25}}
    />
    <Image
      source={require('./assets/star.png')} 
      style={{color: '#E0E41A',marginBottom: 8,width: 23,height: 25,left:5}}
    />
    <Image
      source={require('./assets/star.png')} 
      style={{color: '#E0E41A',marginBottom: 8,width: 23,height: 25,left:5}}
    />
    <Image
      source={require('./assets/star.png')} 
      style={{color: '#E0E41A',marginBottom: 8,width: 23,height: 25,left:5}}
    />
    <Image
      source={require('./assets/star.png')} 
      style={{color: '#E0E41A',marginBottom: 8,width: 23,height: 25,left:5}}
    />
      </View>
      <Text style={{color: 'black',fontSize: 15,fontWeight: 400,lineHeight: 17.58,fontFamily:"Roboto",textAlign:"left"}}>(Xem 828 đánh giá)</Text>
  </View>
      <View style={{flexDirection:'row',justifyContent:'space-around',width:270,alignItems:'center',marginTop:10}}> 
         <Text style={{fontSize: 18,fontWeight: 'bold',}}>1.790.000 ₫</Text>
        <Text style={{fontSize: 16,textDecorationLine:'line-through',color:'gray',marginLeft:30}}>1.790.000 ₫ </Text>
      </View>
      <View style={{flexDirection:'row',marginTop:10,marginLeft:10,alignItems:'center'}}> 
        <Text style={{color:'red',fontWeight:"bold",fontSize:'12'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image
      source={require('./assets/Group 1.png')} 
      style={{marginLeft:5,color:'Black'}}
    />
      </View>
    <TouchableOpacity onPress={() => navigation.navigate('ScreenTwo')}    style={{
         flexDirection: "row",
         alignItems: "center",
         borderWidth: 2,
         borderColor: "gray",
         borderRadius: 15,
         height: 50,
         marginTop: 30,
        }}>
        <Text style={
          {color: 'black',
          fontSize: 16,
          fontSize: 18, marginHorizontal: 95}}>4 MÀU-CHỌN LOẠI</Text>
          <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>
     
      <TouchableOpacity  style={{
        backgroundColor: '#CA1536',
        borderRadius: 5,
        padding: 10,
        marginTop: 60,
        alignItems: 'center',
        height: 44,
        borderRadius: 10,
        }}>
        <Text style={
          {color: 'white',
          fontSize: 16,
          fontWeight: 'bold',}}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

function ScreenTwo({ navigation }) {
  const [color, setColor] = useState("blue");
  const [textColor, setTextColor] = useState("xanh dương");
  const images = {
    blue: require("./assets/vs_blue.png"),
    red: require("./assets/vs_red.png"),
    black: require("./assets/vs_black.png"),
    silver: require("./assets/vs_silver.png"),
  };

  function handleSelectColor() {
    navigation.navigate('Home', { selectedColor: color});
  }

  function changeColorBlue() {
    setColor("blue");
    setTextColor("xanh dương");
  }

  function changeColorRed() {
    setColor("red");
    setTextColor("đỏ");
  }

  function changeColorBlack() {
    setColor("black");
    setTextColor("đen");
  }

  function changeColorSilver() {
    setColor("silver");
    setTextColor("trắng xanh");
  }
  return (
    <View style={{ paddingTop: 40 }}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 15,
          paddingVertical: 0,
          backgroundColor: "white",
        }}
      >
        <Image source={images[color]} style={{ width: 120, height: 150 }} />
        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            paddingHorizontal: 12,
          }}
        >
          <Text style={{fontSize: 19,}}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
          <Text style={{fontSize: 19,}}>
            Màu: <Text style={{fontWeight: "bold",}}>{textColor}</Text>
          </Text>
          <Text style={{fontSize: 19,}}>
            Cung cấp bởi:{" "}
            <Text style={{fontWeight: "bold",}}>Tiki Tradding</Text>
          </Text>
          <Text style={[{fontSize: 19,}, { fontWeight: "bold" }]}>
            1.790.000 đ
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 22, padding: 15 }}>
          Chọn một màu bên dưới:
        </Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            onPress={changeColorSilver}
            style={{
              width: 105,
              height: 100,
              backgroundColor: "#C5F1FB",
              marginVertical: 10,
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={changeColorRed}
            style={{
              width: 105,
              height: 100,
              backgroundColor: "#F30D0D",
              marginVertical: 10,
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={changeColorBlack}
            style={{
              width: 105,
              height: 100,
              backgroundColor: "black",
              marginVertical: 10,
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={changeColorBlue}
            style={{
              width: 105,
              height: 100,
              backgroundColor: "#234896",
              marginVertical: 10,
            }}
          ></TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={handleSelectColor} style={{
    backgroundColor: "#1952E2",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    margin: 15,
    marginTop: 13,
    borderRadius: 15,
  }}>
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
            XONG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

export default App;