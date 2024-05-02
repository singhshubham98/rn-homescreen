import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function CardContent() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top product of the day</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/tatatea.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.productName}>
        Tata Tea Premium | Desh Ki Chai | Unique Blend
      </Text>
      <View style={styles.starContainer}>
        <Text style={styles.star}>★</Text>
        <Text style={styles.star}>★</Text>
        <Text style={styles.star}>★</Text>
        <Text style={styles.star}>★</Text>
        <Text style={[styles.star, styles.emptyStar]}>★</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Read Articles</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'left',
    color: '#000',
    lineHeight: 19,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
    fontWeight: '700',
    lineHeight: 19,
    marginTop: 20,
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  star: {
    fontSize: 30,
    color: '#FD6E47',
    marginRight: 5,
  },
  emptyStar: {
    color: '#ccc',
    border: '1px solid #FD6E47',
  },
  button: {
    backgroundColor: '#FD6E47',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: 138,
    height: 44,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
