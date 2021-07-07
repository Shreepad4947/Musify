import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
container:{
alignItems:'center',
padding:20
},
image:{
width:300,
height:200,
margin:15
},
name:{
    color:'white',
    fontSize:30,
    fontWeight:'bold',
},
likes:{
color:'lightgray',
margin:5,
fontSize:20,

},
creator:{
color:'lightgray',
margin:5,
fontSize:20
},
creatorContainer:{
    flexDirection:'row',
    margin:5
},
button:{
backgroundColor:'#1CD05D',
height:60,
width:175,
borderRadius:50,
justifyContent:'center',
alignContent:'center',
alignItems:'center'
},
buttonText:{
   color:'white',
   fontWeight:'bold',
   fontSize:20
}
});


export default styles;