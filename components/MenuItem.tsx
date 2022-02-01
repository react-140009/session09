import React from 'react';
import {ScrollView, Text, View, TouchableHighlight, Image} from 'react-native';

export const MenuItem = ({navigation}: any) => {
  return (
    <TouchableHighlight>
      <View>
        <Image source={require('../assets/images/sample.gif')}></Image>

        <Text>Dava</Text>
      </View>
    </TouchableHighlight>
  );
};
