import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
const width = Dimensions.get('window').width;

export default function News(props) {
  const data = [...new Array(3).keys()];

  const _renderItem = () => (
    <View style={styles.carouselContainer}>
      <Image
        style={{borderTopLeftRadius: 8, borderTopRightRadius: 8, width: '100%'}}
        source={require('../../assets/surya.png')}
      />
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Yoga Surya Namaskar </Text>
        <Text style={styles.footerText}>
          Within the wide array of yoga asanas (poses), Surya Namaskar, or Sun
          Salutation, holds multiple benefits. It is...
        </Text>
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={['rgba(255, 232, 216, 1)', 'rgba(255, 232, 216, 0)']}
      style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Content as you like it</Text>
        </View>
        <View style={styles.viewall}>
          <Text style={styles.title}>View All</Text>
          <Image source={require('../../assets/chevron_right_black.png')} />
        </View>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => _renderItem(item, index))}
      </ScrollView>
    </LinearGradient>
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
    marginBottom: 10,
    height: width * 0.75,
    width: width * 0.4,
    marginLeft: 20,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  footer: {
    padding: 10,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  footerTitle: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    color: '#401B00',
    paddingTop: 10,
  },
  footerText: {
    fontFamily: 'Roboto',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    color: '#4B4B4B',
    paddingTop: 10,
  },
});
