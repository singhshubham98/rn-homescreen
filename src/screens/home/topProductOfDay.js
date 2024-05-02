import React from 'react';
import {View} from 'react-native';
import CustomCard from '../../components/card';
import CardContent from './cardContentTopProductOfDay';

export default function TopProductOfDay(props) {
  return (
    <View style={{paddingHorizontal: 20, paddingTop: 30}}>
      <CustomCard>
        <CardContent />
      </CustomCard>
    </View>
  );
}
