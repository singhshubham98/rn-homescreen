import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
const width = Dimensions.get('window').width;

export default function RecommendedActivity(props) {
  const data = [...new Array(3).keys()];

  const _renderItem = () => (
    <View style={styles.carouselContainer}>
      <View style={styles.content}>
        <View>
          <Text style={styles.highlightedText}>245 Kcal</Text>
          <Text style={styles.basicText}>Calories</Text>
        </View>
        <View>
          <View style={styles.logo}>
            <Image source={require('../../assets/self_improvement.png')} />
          </View>
        </View>
        <View>
          <Text style={styles.highlightedText}>20 mins</Text>
          <Text style={styles.basicText}>Duration</Text>
        </View>
      </View>
      <Text style={styles.content_title}>Yoga</Text>
      <View style={styles.footer}>
        <View style={{flex: 1 / 6}}>
          <Image source={require('../../assets/alarm_on.png')} />
        </View>
        <View style={{flex: 4 / 6}}>
          <Text style={styles.footerText}>
            Regularity can help you be more flexible and agile
          </Text>
        </View>
        <View style={{flex: 1 / 6, alignItems: 'flex-end'}}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../../assets/chevron_right.png')}
          />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Activity</Text>
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
    paddingTop: 30,
    marginBottom: 20,
    paddingLeft: 20,
  },
  carouselContainer: {
    height: 170,
    width: width * 0.75,
    backgroundColor: '#F4EEFF',
    marginHorizontal: 10,
    borderRadius: 8,
    position: 'relative',
  },
  footer: {
    backgroundColor: '#C8ABFF',
    padding: 10,
    flexDirection: 'row',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  footerText: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#FFFFFF',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  logo: {
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  highlightedText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16.41,
    color: '#1A1A1A',
  },
  basicText: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 13,
    color: '#575756',
    textAlign: 'center',
  },
  content_title: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: '#1A1A1A',
    textAlign: 'center',
    paddingTop: 10,
  },
});
