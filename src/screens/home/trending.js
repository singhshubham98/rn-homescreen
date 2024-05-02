import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Platform,
} from 'react-native';
import CustomCarousel from '../../components/carousel';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
const width = Dimensions.get('window').width;

export default function LeftOfVideo(props) {
  const data = [...new Array(3).keys()];
  const _renderItem = () => (
    <View style={{height: 260, width: 260, marginHorizontal: 10}}>
      <ImageBackground
        source={require('../../assets/krishna.png')}
        imageStyle={{borderRadius: 8}}>
        <Image
          source={require('../../assets/play_circle.png')}
          style={styles.playIcon}
        />
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']}
          style={styles.flexContainer}>
          <Text style={styles.titleText}>Why is Shivratri so powerful?</Text>
          <Text style={styles.desText}>
            One is that Lord Shiva married Parvati on this day. So, it is a
            celebration of thi...
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Near You!</Text>
      <ScrollView horizontal={true}>
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
    paddingTop: 30,
    marginBottom: 20,
    paddingLeft: 20,
  },
  flexContainer: {
    height: '100%',
    display: 'flex',
    alignItems: '',
    justifyContent: 'flex-end',
    padding: 20,
    position: 'relative',
  },
  titleText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19.2,
    color: '#FFFFFF',
  },
  desText: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
  },
  playIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  progressBar: {
    backgroundColor: '#fff',
    height: 4,
  },
  progressBarFilled: {
    backgroundColor: '#FF8383',
    width: '50%',
    height: 4,
  },
  item: {
    width: width - 60,
    height: width - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
