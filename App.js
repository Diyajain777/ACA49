import React from 'react';
import { Text, View } from 'react-native';
import Appbar from './components/aapheading';
import Search from './components/search';

export default function Weather() {
  return (
    <View>
      <Appbar />
      <Search />
    </View>
  );
}
