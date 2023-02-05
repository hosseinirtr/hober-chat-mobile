//import liraries
import React, { Component } from "react";
import {
    View,
    Text,
    Animated,
    StyleSheet,
    ViewBase,
    Image,
    ScrollView
} from "react-native";
import globalStyles from "../../Styles/GlobalStyle";
//Important variables
const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;
const PROFILE_IMAGE_MAX_HEIGHT = 80;
const PROFILE_IMAGE_MIN_HEIGHT = 40;
// create a component

const Profile = props => {
    const scrollY = new Animated.Value(0);
    const onScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
    );
    let Image_Http_URL = {
        uri:
            "https://media-exp1.licdn.com/dms/image/C4D03AQFc0VrAIBRSuA/profile-displayphoto-shrink_800_800/0/1633861173349?e=1642032000&v=beta&t=KQSDtkGelY3Ix34O9v6thoGDFoTYrwGsQLgmCsTyk8U"
    };
    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: "clamp"
    });
    const profileImageSize = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
        extrapolate: "clamp"
    });
    const profileImageMarginTop = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [
            HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
            HEADER_MAX_HEIGHT + 5
        ],
        extrapolate: "clamp"
    });
    const headerZIndex = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - (HEADER_MIN_HEIGHT - 50)],
        outputRange: [0, 1],
        extrapolate: "clamp"
    });
    const headerTitleBottom = scrollY.interpolate({
        inputRange: [
            0,
            HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
            HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
            HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT + 26
        ],
        outputRange: [-20, -20, -20, 0],
        extrapolate: "clamp"
    });
    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "#fcb900",
                    height: headerHeight,
                    zIndex: headerZIndex,
                    alignItems: "center"
                }}
            >
                <Animated.View
                    style={{ position: "absolute", bottom: headerTitleBottom, }}
                >
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#fff" }}>Reza</Text>
                </Animated.View>
            </Animated.View>
            <ScrollView
                style={{ flex: 1 }}
                scrollEventThrottle={16}
                onScroll={onScroll}
            >
                <Animated.View
                    style={{
                        height: profileImageSize,
                        width: profileImageSize,
                        marginTop: profileImageMarginTop,
                        marginLeft: 10,
                        borderRadius: PROFILE_IMAGE_MAX_HEIGHT,
                        borderColor: "#fff",
                        borderWidth: 3,
                        overflow: "hidden"
                    }}
                >
                    <Image source={Image_Http_URL} style={globalStyles.profileImage} />
                </Animated.View>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 26, paddingLeft: 10, color: "black" }}>
                        Reza
                    </Text>
                </View>
                <View style={{ height: 1000 }} />
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});

//make this component available to the app
export default Profile;
