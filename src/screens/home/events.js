import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
const width = Dimensions.get('window').width;

export default function Events(props) {
  const data = [...new Array(3).keys()];

  const _renderItem = () => (
    <View style={styles.carouselContainer}>
      <ImageBackground
        source={require('../../assets/tree.png')}
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
            <Text style={styles.cityText}>IMT, Nagpur</Text>
            <View style={styles.fireFrame}>
              <Image source={require('../../assets/fire.png')} />
              <Text style={styles.fireText}>Mass</Text>
            </View>
            <Text style={styles.cardSubtitle}>Tree Plantation</Text>
            <Text style={styles.date}>5 June 2024, 9:55 AM</Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Register Now</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Events</Text>
        </View>
        <View style={styles.viewall}>
          <Text style={styles.title}>View All</Text>
          <Image source={require('../../assets/chevron_right_black.png')} />
        </View>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => _renderItem(item, index))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18.75,
    color: '#000000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingTop: 30,
    marginBottom: 20,
    paddingLeft: 20,
  },
  viewall: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carouselContainer: {
    height: width * 0.75,
    width: width * 0.75,
    marginLeft: 20,
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
  },
  date: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
  },
});
