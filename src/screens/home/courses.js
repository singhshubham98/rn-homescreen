import React from 'react';
import {Text, StyleSheet} from 'react-native';
import CustomCard from '../../components/card';
import CourseCardContent from './courseCardContent';

export default function Courses(props) {
  return (
    <>
      <Text style={styles.title}>Courses</Text>
      <CustomCard>
        <CourseCardContent />
      </CustomCard>
    </>
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
    paddingLeft: 20,
  },
});
