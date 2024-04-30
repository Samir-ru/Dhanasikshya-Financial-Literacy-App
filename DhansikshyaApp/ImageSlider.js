import React, { useState } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = 350;

const ImageSlider = () => {
    const images = [
        require('./assets/image1.jpg'),
        require('./assets/image2.png'),
        require('./assets/image3.jpg'),
    ];

    const [index, setIndex] = useState(0);
    const scrollX = new Animated.Value(0);

    const renderItem = ({ item }) => (
        <Image source={item} style={styles.image} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                keyExtractor={(item, index) => index.toString()}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            />
            <View style={styles.indicators}>
                {images.map((_, i) => {
                    const inputRange = [(i - 1) * ITEM_WIDTH, i * ITEM_WIDTH, (i + 1) * ITEM_WIDTH];
                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.8, 1.4, 0.8],
                        extrapolate: 'clamp'
                    });
                    return (
                        <Animated.View
                            key={i}
                            style={[styles.indicator, { transform: [{ scale }] }]}
                        />
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: ITEM_WIDTH,
        height: ITEM_WIDTH,
        marginBottom: 20,
        marginTop: 20,
        overflow: "hidden"
    },
    image: {
        width: ITEM_WIDTH,
        height: '100%',
        resizeMode: 'contain',
    },
    indicators: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'cyan',
        marginHorizontal: 5,
    },
});

export default ImageSlider;
