// import React from 'react';
// import {View} from 'react-native';
// import CustomCard from '../../components/card';
// import CardContent from './cardContentTopProductOfDay';

// export default function TopProductOfDay(props) {
//   return (
//     <View style={{paddingHorizontal: 20, paddingTop: 30}}>
//       <CustomCard>
//         <CardContent />
//       </CustomCard>
//     </View>
//   );
// }
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
import CustomCard from '../../components/card';
import CardContent from './cardContentTopProductOfDay';

export default function _calendarCarouselElement(props) {
  const width = Dimensions.get('window').width;
  const _renderItem = () => (
    <View style={{paddingHorizontal: 20, paddingVertical: 30}}>
      <CustomCard>
        <CardContent />
      </CustomCard>
    </View>
  );

  return (
    <>
      <CustomCarousel
        sliderWidth={width}
        itemWidth={width - 20}
        showDots={true}
        dotActiveColor={'#FFC7B6'}
        dotInactiveColor={'#DBDBDB'}
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
