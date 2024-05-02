import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomCarousel from '../../components/carousel';

export default function _calendarCarouselElement(props) {
  const width = Dimensions.get('window').width;
  const _renderItem = () => (
    <View style={styles.calendarCard}>
      <View style={{flex: 1 / 5, padding: 20}}>
        <Text style={styles.dateText}>02</Text>
        <Text style={styles.monthText}>Oct</Text>
      </View>
      <ImageBackground
        source={require('../../assets/curl.png')}
        style={{flex: 4 / 5}}>
        <View style={{padding: 20}}>
          <View style={styles.highlightedEvent}>
            <Text
              style={[
                styles.smallFont,
                {
                  paddingVertical: 8,
                  paddingLeft: 22,
                },
              ]}>
              Anant Chaturdashi
            </Text>
          </View>
          <View style={styles.flexStyle}>
            <Image source={require('../../assets/dot.png')} />
            <Text
              style={[styles.smallFont, styles.green, {fontWeight: 'bold'}]}>
              Positive Energy Day
            </Text>
          </View>
          <View style={styles.flexStyle}>
            <Image source={require('../../assets/check.png')} />
            <Text style={[styles.smallFont]}>
              Good day for a <Text style={{fontWeight: '700'}}>meeting</Text>
            </Text>
          </View>
          <View style={styles.flexStyle}>
            <Image source={require('../../assets/check.png')} />
            <Text style={[styles.smallFont]}>
              Perfect day to <Text style={{fontWeight: '700'}}>buy</Text>
            </Text>
          </View>
          <View style={styles.flexStyle}>
            <Image source={require('../../assets/north-star.png')} />
            <Text style={[styles.smallFont, {fontWeight: '700'}]}>
              Travel North
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <>
      <CustomCarousel
        sliderWidth={width - 30}
        itemWidth={width - 30}
        showDots={true}
        data={[...new Array(3).keys()]}
        _renderItem={_renderItem}
      />
    </>
  );
}

const styles = StyleSheet.create({
  calendarCard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    borderRadius: 8,
    marginBottom: 30,
    marginHorizontal: 5,
  },
  dateText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 37.5,
    color: '#000000',
    textAlign: 'center',
  },
  monthText: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: '#000000',
    textAlign: 'center',
  },
  flexStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  green: {
    color: '#4D9F26',
  },
  black: {
    color: '#000000',
  },
  smallFont: {
    fontFamily: 'Roboto',
    fontSize: 12,
    lineHeight: 15,
    paddingLeft: 5,
  },
  highlightedEvent: {
    borderRadius: 8,
    backgroundColor: '#BAF79D',
  },
});
