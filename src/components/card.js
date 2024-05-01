import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function CustomCard({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
