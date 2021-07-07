import React, {useEffect, useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';

import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';
import AlbumDetails from '../data/AlbumDetails';
import { getAlbum } from '../src/graphql/queries';
import albumDetails from '../data/AlbumDetails';







const AlbumScreen = () => {

  const route = useRoute();
  // const albumId = route.params.id;

  // const [album, setAlbum] = useState(null)

  useEffect(() => {
    // const fetchAlbumDetails = async () => {
      // try {
        // const data = await API.graphql(graphqlOperation(getAlbum, { id: albumId }))
        // setAlbum(data.data.getAlbum)
      // } catch (e) {
        console.log(route);
      // }
    // }

    // fetchAlbumDetails();
  }, [])

  // if (!album) {
    // return <Text>Loading...</Text>
  // }

  return (
    <View> 
      
      { <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
      /> }
     
     
    </View>
  )
}

export default AlbumScreen;