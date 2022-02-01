import React from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native';

export const MenuItem = ({navigation, img, title, onPress}: any) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.itemContainer}>
        <Image source={img} style={styles.itemImage}></Image>
        <Text>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    width: 150,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
    marginVertical: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  itemImage: {
    width: 80,
    resizeMode: 'stretch',
  },
});
