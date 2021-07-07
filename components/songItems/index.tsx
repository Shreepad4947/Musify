import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Album } from '../../types';
import { Media } from '../../types';

export type AlbumProps = {
  album: Album,
}
export type songslibraryProps = {
  media: Media
}

const SongComponent = (props: songslibraryProps) => {

  const navigation = useNavigation();

  // const onPress = () => {
  //   navigation.navigate('AlbumScreen', { id: props.album.id })
  // }

  return (
    // <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
         <Text style={styles.text}>{props.media.filename}</Text>
          <Text style={styles.text}>{props.media.uri}</Text>
      </View>
    // {/* </TouchableWithoutFeedback> */}

  )
}

export default SongComponent;