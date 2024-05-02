import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default function Quote(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start your day with wisdom</Text>
      <View style={styles.flexContainer}>
        <View style={{flex: 1 / 4}}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/Ellipse4080.png')}
              style={styles.topBorder}
            />
            <Image
              source={require('../../assets/tambe.png')}
              style={styles.image}
            />
            <Image
              source={require('../../assets/Ellipse4082.png')}
              style={styles.bottomBorder}
            />
          </View>
          <Text style={styles.name}>Balaji {'\n'}Tambe</Text>
        </View>
        <View style={[styles.quoteContainer, {flex: 3 / 4}]}>
          <Image source={require('../../assets/startingQuote.png')} />
          <Text style={styles.quoteTitle}>Wisdom of the day</Text>
          <Text style={styles.quote}>
            Under any circumstance, simply do your best, and you will avoid
            self-judgment, self-abuse and regret
          </Text>
          <View style={styles.endQuoteIcon}>
            <Image source={require('../../assets/endQuote.png')} />
          </View>
        </View>
      </View>
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
    paddingTop: 24,
    paddingBottom: 12,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingRight: 10,
  },
  topBorder: {
    position: 'absolute',
    top: -9,
    left: 0,
  },
  bottomBorder: {
    position: 'absolute',
    bottom: -9,
    left: 0,
  },
  image: {
    borderRadius: 50,
    width: 56,
    height: 56,
  },

  name: {
    paddingTop: 15,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    color: '#121212',
    textAlign: 'center',
  },
  quoteContainer: {
    borderWidth: 1,
    borderColor: '#FED3C6',
    borderRadius: 8,
    padding: 10,
    display: 'flex',
  },
  quoteTitle: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 16,
    fontStyle: 'italic',
    lineHeight: 18.75,
    color: '#FFB29A',
    paddingVertical: 5,
    paddingLeft: 15,
  },
  quote: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    color: '#575756',
    paddingBottom: 5,
    paddingLeft: 15,
  },
  endQuoteIcon: {
    alignItems: 'flex-end',
  },
});
