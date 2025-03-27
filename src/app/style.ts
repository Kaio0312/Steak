import { StyleSheet } from "react-native";
   
export const styles = StyleSheet.create({
    container : {
        flex: 4,
        backgroundColor: "#f4f0e5",
        color: "black"
    },
    header:{
    padding: 10,
    color: "black"
    },
    headerImage:{
        width: "100%",
        height: 240,
        borderRadius: 8
    },
    restauranteName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16
    },

    subtitle: {
    color: "black",
    marginTop: 4
    },

    tabs:{
        flexDirection:"row",
        padding: 16,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        gap: 16
    },
    tabsName:{
        color:"black"
    },
    menuList:{
    padding:16,
    flex:1
    },
    menuItem:{
        flexDirection:"row",
        borderBottomColor:"black",
        borderBottomWidth:1,
        padding:16
    },
    menuContent:{
        flex:1,
        marginRight:16,
       color: "black"
    },
    itemImage:{
        width:150,
        height:130,
        borderRadius:8,
   
    },
    itemName:{
        fontSize:16,
        fontWeight:"bold"
    },
    itemDescription:{
        color:"#010d23",
        marginTop:4
    },
    itemPrice:{
        fontSize:16,
        fontWeight:"bold",
        marginTop: 8
    },
})

