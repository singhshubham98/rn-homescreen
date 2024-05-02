import React from 'react';
import CustomCard from '../../components/card';
import CourseCardContent from './courseCardContent';
import {Text, View, Image, StyleSheet} from 'react-native';

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
        paddingTop: 30,
        marginBottom: 20,
        paddingLeft: 20,
    },
  });
  
