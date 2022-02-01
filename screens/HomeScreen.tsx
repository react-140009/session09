import React from 'react';
import {ScrollView, Text, View, Button, StyleSheet} from 'react-native';
import {MenuItem} from '../components/MenuItem';

export const HomeScreen = ({navigation}: any) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Text>HOME</Text>
        <View style={styles.menuContainer}>
          <MenuItem
            img={require('../assets/images/drug.png')}
            title="دوا"></MenuItem>
          <MenuItem
            img={require('../assets/images/drug.png')}
            title="بیمارستان"></MenuItem>
          <MenuItem
            img={require('../assets/images/drug.png')}
            title="دوا"></MenuItem>
          <MenuItem
            img={require('../assets/images/drug.png')}
            title="بیمارستان"></MenuItem>
        </View>
        <Button
          title="Go To About us"
          onPress={() => navigation.push('AboutUs')}></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
});
