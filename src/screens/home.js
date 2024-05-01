import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
