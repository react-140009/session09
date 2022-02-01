import React from 'react';
import {ScrollView, Text, View, Button} from 'react-native';

export const HomeScreen = ({navigation}: any) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Text>HOME</Text>
        <Button
          title="Go To About us"
          onPress={() => navigation.push('AboutUs')}></Button>
      </View>
    </ScrollView>
  );
};
