import React from 'react';
import {Button, Text, View} from 'react-native';

export const AboutUsScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>About Us</Text>
      <Button title="Go Back" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
