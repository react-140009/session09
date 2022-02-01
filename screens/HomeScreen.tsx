import React from 'react';
import {ScrollView, Text, View, Button} from 'react-native';
import {MenuItem} from '../components/MenuItem';

export const HomeScreen = ({navigation}: any) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Text>HOME</Text>
        <MenuItem></MenuItem>
        <Button
          title="Go To About us"
          onPress={() => navigation.push('AboutUs')}></Button>
      </View>
    </ScrollView>
  );
};
