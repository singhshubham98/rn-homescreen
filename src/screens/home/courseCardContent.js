import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
import LinearGradient from 'react-native-linear-gradient';


export default function CourseCardContent() {
  return (
    <View style={styles.carouselContainer}>
      <ImageBackground
        source={require('../../assets/courses.png')}
        resizeMode="cover"
        imageStyle={{
          borderRadius: 8,
          height: '100%',
          width: '100%',
        }}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']}
          style={styles.flexContainer}>
          <View style={styles.content}>
            <Text style={styles.cardSubtitle}>Agnihotra way of lifestyle : By Dr. Rajimwale.</Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Register Now</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    
    carouselContainer: {
      height: width * 0.75,
      width: width * 0.75,
      marginLeft: 0,
      borderRadius: 8,
      marginBottom: 20,
    },
    footer: {
      backgroundColor: '#000',
      padding: 15,
      borderBottomRightRadius: 8,
      borderBottomLeftRadius: 8,
      position: 'absolute',
      width: '100%',
      bottom: 0,
    },
    footerText: {
      fontFamily: 'Roboto',
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 20,
      color: '#FF6D3F',
      textAlign: 'center',
    },
    flexContainer: {
      height: '100%',
      display: 'flex',
      position: 'relative',
      borderRadius: 8,
    },
    cityText: {
      fontFamily: 'Roboto',
      fontWeight: '600',
      fontSize: 24,
      lineHeight: 28,
      color: '#FFFFFF',
    },
    content: {
      padding: 20,
    },
    fireFrame: {
      backgroundColor: '#127E60',
      borderRadius: 26,
      paddingVertical: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      width: 80,
      marginTop: 100,
    },
    fireText: {
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 14,
      color: '#FFFFFF',
      paddingLeft: 5,
    },
    cardSubtitle: {
      fontFamily: 'Roboto',
      fontWeight: '700',
      fontSize: 18,
      lineHeight: 21,
      color: '#FFFFFF',
      paddingTop: 10,
      marginTop: 160,
    },
    date: {
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 14,
      color: '#FFFFFF',
    },
  });
  