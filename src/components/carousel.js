import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

export default function CustomCarousel(props) {
  const [currentIndex, setIndex] = useState(0);
  const {
    _renderItem,
    data,
    itemWidth,
    sliderWidth,
    sliderHeight,
    hasParallaxImages,
    layout = 'default',
    loop = true,
    showDots,
  } = props;

  return (
    <>
      <Carousel
        loop={loop}
        sliderWidth={sliderWidth}
        sliderHeight={sliderHeight}
        itemWidth={itemWidth}
        data={data}
        renderItem={_renderItem}
        hasParallaxImages={hasParallaxImages}
        layout={layout}
        onSnapToItem={index => setIndex(index)}
      />
      {showDots && (
        <Pagination
          dotsLength={data.length}
          activeDotIndex={currentIndex}
          dotStyle={styles.dot}
          inactiveDotStyle={styles.inactiveDot}
          inactiveDotScale={0.6}
          containerStyle={{paddingVertical: 0}}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});
