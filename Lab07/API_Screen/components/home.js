import { Text, SafeAreaView, StyleSheet,View,TouchableOpacity,TextInput,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack

export default function App({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{backgroundColor:"black",padding:30}}>
    <TouchableOpacity onPress={()=>navigation.navigate("Display")}>
    <Text style={{fontSize:32,color:'white',textAlign:'center'}}>Display</Text>
    </TouchableOpacity>
    </View>
    <View style={{backgroundColor:"black",padding:30}}>
    <TouchableOpacity onPress={()=>navigation.navigate("Add")}>
    <Text style={{fontSize:32,color:'white',textAlign:'center'}}>Add</Text>
    </TouchableOpacity>
    </View>
    <View style={{backgroundColor:"black",padding:30}}>
    <TouchableOpacity onPress={()=>navigation.navigate("Delete")}>
    <Text style={{fontSize:32,color:'white',textAlign:'center'}}>Delete</Text>
    </TouchableOpacity>
    </View>
      <View style={{backgroundColor:"black",padding:30}}>
    <TouchableOpacity onPress={()=>navigation.navigate("Update")}>
    <Text style={{fontSize:32,color:'white',textAlign:'center'}}>Update</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',gap:30,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
