import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    id: "1",
    name: "Ca nấu lẩu, nấu mì mini...",
    shop: "Shop Devang",
    image: require("./image/ca_nau_lau.png"),
  },
  {
    id: "2",
    name: "1KG KHÔ GÀ BƠ TỎI...",
    shop: "LTD Food",
    image: require("./image/ga_bo_toi.png"),
  },
  {
    id: "3",
    name: "Xe cần cẩu đa năng",
    shop: "Thế giới đồ chơi",
    image: require("./image/xa_can_cau.png"),
  },
  {
    id: "4",
    name: "Đồ chơi dạng mô hình",
    shop: "Thế giới đồ chơi",
    image: require("./image/do_choi_dang_mo_hinh.png"),
  },
  {
    id: "5",
    name: "Lãnh đạo giản đơn",
    shop: "Minh Long Book",
    image: require("./image/lanh_dao_gian_don.png"),
  },
  {
    id: "6",
    name: "Hiểu lòng con trẻ",
    shop: "Minh Long Book",
    image: require("./image/hieu_long_con_tre.png"),
  },
  {
    id: "7",
    name: "Donal Trump - Lãnh đạo thiên tài",
    shop: "Minh Long Book",
    image: require("./image/trump 1.png"),
  },
  
];

const Item = ({ obj }) => (
  <View style={styles.contentData}>
    {/* Cột 1: Hình ảnh */}
    <View style={styles.dataImg}>
      <Image
        source={obj.image}
      />
    </View>

    {/* Cột 2: Văn bản */}
    <View style={styles.dataText}>
      <Text style={styles.title}>{obj.name}</Text>
      <Text style={styles.shop}>{obj.shop}</Text>
    </View>

    {/* Cột 3: Nút */}
    <View style={styles.button}>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => alert(`You clicked on ${obj.name}`)}
      >
        <Text style={styles.buttonText1}>Chat</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View >
            <Image source={require("./image/out.png")} />
          </View>
          <View >
            <Text style={styles.headerText}>Chat</Text>
          </View>

          <View >
            <Image source={require("./image/cart.png")} />
          </View>
        </View>
        <View style={styles.content}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item obj={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.header}>
        <View >
            <Image source={require("./image/group.png")} />
          </View>
          <View >
          <Image source={require("./image/home.png")} />

          </View>

          <View >
            <Image source={require("./image/back.png")} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    paddingLeft:10,
    paddingRight:10

  },

  headerText: {
    color:"white",
    fontWeight:"500",
    fontSize:18
  },

  content: {
    flex: 10,
  },
  contentData: {
    flexDirection: "row", // Đặt các cột trong hàng ngang
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderColor:"#C4C4C4",
    borderWidth:1
  },
  dataImg: {
    flex: 1, // Chiếm 1 phần không gian
  },
  dataText: {
    flex: 2, // Chiếm 2 phần không gian
    paddingLeft: 10,
  },
  button: {
    flex: 1, // Chiếm 1 phần không gian
    marginRight:10
  },
  footer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  shop: {
    fontSize: 14,
    color: "gray",
  },
  button1: {
    backgroundColor: "#F31111",
    padding: 10,
    width: 80,
  },
  buttonText1: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default App;