import * as React from 'react';
import { StyleSheet } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';
import { listAlbumCategorys } from '../src/graphql/queries';
import {useEffect, useState} from "react";
import { API, graphqlOperation } from 'aws-amplify';
import {  FlatList, View  } from 'react-native';





export default function HomeScreen() {

  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   const fetchAlbumCategories = async () => {
  //     try {
  //       const data = await API.graphql(graphqlOperation(listAlbumCategorys));
  //       setCategories(data.data.listAlbumCategorys.items);
  //     } catch (e) {
  //       console.log(data);
  //     }
  //   }

  //   fetchAlbumCategories();
  // }, []);


  return (
    <View style={styles.container}>
       <FlatList
         data={albumCategories}
         renderItem={({ item }) => (
           <AlbumCategory
             title={item.title}
             albums={item.albums}
           />
         )}
         keyExtractor={(item) => item.id}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
