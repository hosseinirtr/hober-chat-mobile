import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Pressable
} from "react-native";
import globalStyles from "../../Styles/GlobalStyle";
import { AvatarUser } from "./AvatarUser";

export const ChatCardList = ({ data }) => (
  <View key={data.id} style={globalStyles.chatCard}>
    <View
      id="image"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Pressable onPress={() => navigation.navigate("Profile")}>
        <AvatarUser data={data} />
      </Pressable>
    </View>
    <View id="main" style={{ flex: 3, flexDirection: "column" }}>
      <Pressable
        onPress={() => {
          console.log("name is", data.firstName + " " + data.lastName);
        }}
      >
        <Text id="name" style={globalStyles.userName}>
          {data.firstName
            ? data.firstName
            : "" + " " + data.lastName
            ? data.lastName
            : ""}
        </Text>
        <Text id="message" style={{ fontSize: 12, alignItems: "center" }}>
          {data.lastMessage}
        </Text>
      </Pressable>
    </View>
    {data.notificationNumber != 0 && data.notificationNumber ? (
      <View id="notification" style={{ flex: 1 }}>
        <Text style={globalStyles.notificationNumber}>
          {data.notificationNumber}
        </Text>
      </View>
    ) : (
      <View id="notification" style={{ flex: 1 }}>
        <Text
          style={[
            globalStyles.notificationNumber,
            { backgroundColor: "transparent" }
          ]}
        ></Text>
      </View>
    )}
  </View>
);
