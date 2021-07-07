import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import SongListItem from '../components/SongListItem';
import { Text, View } from '../components/Themed';

export default function TabFourScreen() {

  const [news, setNews] = useState([]);
  useEffect( () => {
    const url = "https://newsapi.org/v2/everything?q=tesla&from=2021-06-01&sortBy=publishedAt&apiKey=39f8394a864140cc99a7eeeb8cb45f05";
     const fetchNews = async () => {
        try {
          const response = await fetch(url);
          const newsData = await response.json()
          setNews(newsData.articles)
         } catch (e) {
       console.log(e)
      }
   }
  fetchNews()
  }, [])

  return (
    <View style={styles.container}>
       <FlatList
       style ={{width: '100%'}}
       data={news}
       renderItem={({ item }) => <SongListItem newsList={item} />}
       keyExtractor={(item, index) => item.id}
       />
   </View>
 );






  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourites</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabFourScreen.tsx" />
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
