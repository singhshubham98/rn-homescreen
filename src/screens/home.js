import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Header from '../components/header';
import LinearGradient from 'react-native-linear-gradient';
import _calendarCarouselElement from './home/calendarCarouselElement';
import Quote from './home/quote';
import LeftOfVideo from './home/leftOfVideo';
import Trending from './home/trending';
import RecommendedActivity from './home/rActivity';
import News from './home/news';
import Events from './home/events';
import TopProductOfDay from './home/topProductOfDay';
import Courses from './home/courses';

export default function Home() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={['#fff', '#FFD1C2']}>
        <Header />
        <View style={styles.flowerContainer}>
          <ImageBackground
            source={require('../assets/flower.png')}
            style={styles.backgroundImage}
            resizeMode="cover">
            <View style={{paddingHorizontal: 15}}>
              <Text style={styles.geetingMessage}>Namaste Neha!</Text>
              {_calendarCarouselElement()}
            </View>
          </ImageBackground>
        </View>
      </LinearGradient>
      <Quote />
      <LeftOfVideo />
      <RecommendedActivity />
      <TopProductOfDay />
      <Trending />
      <News />
      <Events />
      <Courses />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flowerContainer: {
    width: '100%',
    flex: 1,
  },
  backgroundImage: {
    marginBottom: 20,
  },
  geetingMessage: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    color: '#121212',
    marginTop: 40,
    marginBottom: 20,
    paddingLeft: 5,
  },
});
