//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Pressable } from 'react-native';
import Svg, { Image, Circle, ClipParh, ClipPath } from 'react-native-svg';
import Animated, { EasingNode } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
// create a component
const {
    Value,
    event,
    block,
    cond,
    eq,
    set,
    Clock,
    startClock,
    stopClock,
    debug,
    timing,
    clockRunning,
    interpolateNode,
    Extrapolate,
    concat
} = Animated;
const { width, height } = Dimensions.get("window")
function runTiming(clock, value, dest) {
    const state = {
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0)
    };

    const config = {
        duration: 1000,
        toValue: new Value(0),
        easing: EasingNode.inOut(EasingNode.ease)
    };

    return block([
        cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            set(config.toValue, dest),
            startClock(clock)
        ]),
        timing(clock, state, config),
        cond(state.finished, debug('stop clock', stopClock(clock))),
        state.position
    ]);
}
const LoginAnimated = () => {
    const [buttonOpacity, setButtonOpacity] = useState(new Value(1))
    const buttonY = interpolateNode(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [100, 0],
        extrapolate: Extrapolate.CLAMP
    });
    const bgY = interpolateNode(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [-height / 3 - 70, 0],
        extrapolate: Extrapolate.CLAMP
    });
    const textInputZindex = interpolateNode(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [1, -1],
        extrapolate: Extrapolate.CLAMP
    });
    const textInputY = interpolateNode(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [0, 100],
        extrapolate: Extrapolate.CLAMP
    });
    const textInputOpacity = interpolateNode(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [1, 0],
        extrapolate: Extrapolate.CLAMP
    });
    const rotateCross = interpolateNode(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [180, 360],
        extrapolate: Extrapolate.CLAMP
    });
    const onOpenButtom = (event) => {
        block([
            cond(
                eq(State, State.END),
                setButtonOpacity(runTiming(new Clock(), 1, 0))
            )
        ])
        // {
        //     nativeEvent: ({ state }) =>
        // }
        // console.info(nativeEvent)
        // setButtonOpacity(runTiming(new Clock(), 1, 0))
    }
    const onCloseButtom = (event) => {
        setButtonOpacity(runTiming(new Clock(), 0, 1))
    }
    return (
        <View style={styles.container}>
            <Animated.View style={{ ...StyleSheet.absoluteFill, transform: [{ translateY: bgY }] }}>
                <Svg height={height + 50} width={width} >
                    <ClipPath id="clip">
                        <Circle r={height + 50} cx={width / 2} />
                    </ClipPath>
                    <Image
                        href={require('../../../assets/images/bgTwo.jpg')}
                        width={width}
                        height={height + 50}
                        preserveAspectRatio="xMidYMid slice"
                        clipPath="url(#clip)"
                    />
                </Svg>

            </Animated.View>
            <View style={styles.bottom}>
                <Pressable onPress={onOpenButtom}>
                    <Animated.View style={[styles.button, { opacity: buttonOpacity, transform: [{ translateY: buttonY }] }]}>
                        <Text style={styles.text} >
                            Sign In
                        </Text>
                    </Animated.View>
                </Pressable>
                <Animated.View style={[styles.button, { marginTop: 10, backgroundColor: "blue", opacity: buttonOpacity, transform: [{ translateY: buttonY }] }]}>
                    <Text style={[styles.text, { color: "#fff" }]} >
                        Login
                    </Text>
                </Animated.View>
                <Animated.View style={{ zIndex: textInputZindex, opacity: textInputOpacity, transform: [{ translateY: textInputY }], height: height / 3, ...StyleSheet.absoluteFill, top: null, justifyContent: "center", }}>
                    <Animated.View style={styles.closeButton}>
                        <Pressable onPress={onCloseButtom}>
                            <Animated.Text style={{ fontSize: 15, color: "black", fontWeight: "bold", transform: [{ rotate: concat(rotateCross, 'deg') }] }}> X </Animated.Text>
                        </Pressable>
                    </Animated.View>
                    <TextInput style={styles.textInput} placeholder="Username" placeholderTextColor="black" />
                    <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor="black" />
                    <Animated.View style={[styles.button, { width: width - 40 }]}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            Sign In
                        </Text>
                    </Animated.View>
                </Animated.View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    closeButton: {
        position: 'absolute',
        height: 40, width: 40,
        backgroundColor: "#fff",
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        top: -20,
        left: width / 2 - 20,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 2
    },
    textInput: {
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 25,
        borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 5,
        borderColor: 'rgba(0,0,0,0.2)'
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    },
    bottom: {
        height: height / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: width - 80,
        backgroundColor: '#fff',
        height: 60,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 2
    },

    image: {
        flex: 1,
        height: null, width: null
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "flex-end"
    },
});

//make this component available to the app
export default LoginAnimated;
