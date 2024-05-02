import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import CustomCarousel from '../../components/carousel';
import LinearGradient from 'react-native-linear-gradient';

export default function LeftOfVideo(props) {
  const width = Dimensions.get('window').width;
  const _renderItem = () => (
    <ImageBackground source={require('../../assets/teacher.png')}>
      <Image
        source={require('../../assets/play_circle.png')}
        style={styles.playIcon}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']}
        style={styles.flexContainer}>
        <Text style={styles.chapterText}>Chapter 2</Text>
        <Text style={styles.titleText}>Exploration Of Conciousness</Text>
        <Text style={styles.desText}>
          Stay updated with your favourite content Stay updated with your
          favourite content
        </Text>
      </LinearGradient>
      <View style={styles.progressBar}>
        <View style={styles.progressBarFilled}></View>
      </View>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick up from where you left off</Text>
      <CustomCarousel
        data={[...new Array(3).keys()]}
        _renderItem={_renderItem}
        mode="parallax"
        showDots={false}
        width={width - 30}
        height={width}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18.75,
    color: '#000000',
    paddingTop: 30,
    marginBottom: -20,
  },
  flexContainer: {
    height: '100%',
    display: 'flex',
    alignItems: '',
    justifyContent: 'flex-end',
    padding: 20,
    position: 'relative',
  },
  chapterText: {
    fontFamily: 'Roboto',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFBFE',
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
});
