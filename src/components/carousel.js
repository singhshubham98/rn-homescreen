import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

export default function CustomCarousel(props) {
  const width = Dimensions.get('window').width;
  const progressValue = useSharedValue(0);
  const [currentIndex, setIndex] = useState(0);
  const {_renderItem, data} = props;

  return (
    <>
      <Carousel
        width={width - 30}
        height={width / 2}
        data={data}
        pagingEnabled={true}
        scrollAnimationDuration={500}
        onSnapToItem={index => setIndex(index)}
        renderItem={_renderItem}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
      />
      {!!progressValue && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: 100,
            alignSelf: 'center',
          }}>
          {data.map((item, index) => (
            <PaginationItem
              backgroundColor={currentIndex === index ? '#000' : '#fff'}
              animValue={progressValue}
              index={index}
              key={index}
              length={data.length}
            />
          ))}
        </View>
      )}
    </>
  );
}

const PaginationItem = props => {
  const {animValue, index, length, backgroundColor} = props;
  const width = 10;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View
      style={{
        backgroundColor: 'white',
        width,
        height: width,
        borderRadius: 50,
        overflow: 'hidden',
        transform: [
          {
            rotateZ: '0deg',
          },
        ],
      }}>
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  );
};
