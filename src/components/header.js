import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.row}>
      <Image source={require('../assets/hamburger.png')} />
      <View style={styles.rightHeader}>
        <Image source={require('../assets/notifications.png')} />
        <Image source={require('../assets/search.png')} style={styles.icon} />
        <Image source={require('../assets/Monogram.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    marginTop: 15,
  },
  rightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 15,
  },
});

export default Header;
