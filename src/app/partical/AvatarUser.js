//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import globalStyles from "../../Styles/GlobalStyle";

// create a component
export const AvatarUser = ({ data }) => {
  return (
    <View>
      {data.image ? (
        <Avatar
          size={50}
          icon={{ name: "person-circle-outline", type: "ionicon" }}
          containerStyle={{
            backgroundColor: "#fcb900",
            width: 50,
            height: 50,
            borderRadius: 10
          }}
          avatarStyle={{
            borderRadius: 10,
            borderColor:
              data.isOnline === true
                ? "green"
                : data.isOnline === "unknown"
                ? "red"
                : !data.isOnline
                ? "#fcb900"
                : "#fcb900",
            borderWidth: 1.5
          }}
          source={{
            uri: data.image
          }}
        />
      ) : (
        <Avatar
          title={data.firstName[0]}
          size={50}
          icon={{ name: "person-circle-outline", type: "ionicon" }}
          containerStyle={{ backgroundColor: "#fcb900", borderRadius: 10 }}
          avatarStyle={{
            borderRadius: 10,
            borderColor:
              data.isOnline === true
                ? "green"
                : data.isOnline === "unknown"
                ? "red"
                : !data.isOnline
                ? "#fcb900"
                : "#fcb900",
            borderWidth: 1.5
          }}
        />
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

export const AvatarStory = ({ data, index }) => {
  return (
    <View>
      {data.profileImage ? (
        <Avatar
          size={50}
          icon={{ name: "person-circle-outline", type: "ionicon" }}
          containerStyle={{
            backgroundColor: "#fcb900",
            borderRadius: 50,
            marginLeft: index == 0 ? 10 : 0
          }}
          avatarStyle={globalStyles.avataImageStory}
          source={{
            uri: data.profileImage
          }}
        />
      ) : (
        <Avatar
          title={data.firstName[0]}
          size={50}
          icon={{ name: "person-circle-outline", type: "ionicon" }}
          containerStyle={{ backgroundColor: "#fcb900", borderRadius: 50 }}
          avatarStyle={globalStyles.avataImageStory}
        />
      )}
    </View>
  );
};
