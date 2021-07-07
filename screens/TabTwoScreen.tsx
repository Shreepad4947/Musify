import * as React  from 'react';
import { StyleSheet,Alert } from 'react-native';
import { useEffect,useState ,useRef} from 'react';
import * as MediaLibrary from 'expo-media-library';
import EditScreenInfo from '../components/EditScreenInfo';
import { FlatList, View, Text, SafeAreaView,  Dimensions, Animated, Easing  } from 'react-native';
import { createContext } from 'react';
import { Media } from '../types';
import SongListItem from '../components/SongListItem';
// import songslibrary from '../components/songslibrary';
import AlbumComponent from '../components/Album';
import songItems from '../components/songItems';
import SongComponent from '../components/songItems';

// export interface Data {
//   media: string;
 
// }
// export type mediaprops={
//   media:Media,
// }




// var data : string[Media];
// const [categories,setcategories]= useState( []);

export default function  TabTwoScreen(props:mediaprops) {
const getPermission= async ()=>{
   const permission =await MediaLibrary.getPermissionsAsync()
   if (permission.granted){
     getAudioFiles();
   }
   if(!permission.granted && permission.canAskAgain){
     const {status,canAskAgain} = await MediaLibrary.requestPermissionsAsync()
     if (status == 'denied' && canAskAgain){
       permissionAlert();
  } 
  if(status=='granted'){
getAudioFiles();
  }
  if (status == 'denied' && !canAskAgain){

  }
  }
} 
  
  const permissionAlert=()=>{
    Alert.alert("Permission Required", "This App Neeeds to Read Audio From Device",
    [{text:"Allow",
    onPress:()=> getPermission()
  },
  
  {
  text:"Deny",
  onPress:()=> permissionAlert()
}])
}

const getAudioFiles= async()=>{
 const media=await MediaLibrary.getAssetsAsync({
    mediaType:'audio',
 
  }
  
  );


 
  

  
 

useEffect(() =>{
  getPermission();
},[]);




  return(
  <View style={styles.container}>
   
    

    <Text>gsefkighireuh</Text>
    
  </View>
    
  )};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
   
    color:'white'
    
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})};
