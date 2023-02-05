import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Pressable,
  Alert,
  Modal
} from "react-native";
import globalStyles from "../../Styles/GlobalStyle";
import { AvatarStory, AvatarUser } from "../partical/AvatarUser";
import { ChatCardList } from "../partical/ChatChard";
const listChat = [
  {
    id: "10",
    image: "",
    firstName: "Faezeh",
    lastName: "",
    lastMessage: "سلام حسین",
    active: false,
    notificationNumber: "1",
    isOnline: true
  },
  {
    id: "11",
    image: "",
    firstName: "Tim Cook",
    lastName: "",
    lastMessage: "Hi Sir, ",
    active: false,
    notificationNumber: "0",
    isOnline: true
  },
  {
    id: "12",
    image: "",
    firstName: "Jadi",
    lastName: "",
    lastMessage: "پروژه عالی شده فردا میبینمت",
    active: false,
    notificationNumber: "0",
    isOnline: "unknown"
  },
  {
    id: "13",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFc0VrAIBRSuA/profile-displayphoto-shrink_800_800/0/1633861173349?e=1642032000&v=beta&t=KQSDtkGelY3Ix34O9v6thoGDFoTYrwGsQLgmCsTyk8U",
    firstName: "Reza",
    lastName: "",
    lastMessage: "تکلیف های دانشگاه رو نوشتی؟",
    active: false,
    notificationNumber: "1",
    isOnline: true
  },
  {
    id: "14",
    image: null,
    firstName: "Baba",
    lastName: "",
    lastMessage: "شب راجبش حرف میزنیم",
    active: false,
    notificationNumber: "0",
    isOnline: false
  },
  {
    id: "15",
    image: "",
    firstName: "Sami",
    lastName: "",
    lastMessage: "تو چه خبر؟",
    active: false,
    notificationNumber: "0",
    isOnline: true
  }
];
const Stories = [
  {
    id: "1",
    firstName: "",
    uri: "",
    profileImage:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFc0VrAIBRSuA/profile-displayphoto-shrink_800_800/0/1633861173349?e=1642032000&v=beta&t=KQSDtkGelY3Ix34O9v6thoGDFoTYrwGsQLgmCsTyk8U"
  },
  {
    id: "2",
    firstName: "",
    uri: "",
    profileImage: ""
  },
  {
    id: "3",
    firstName: "",
    uri: "",
    profileImage: ""
  },
  {
    id: "4",
    firstName: "",
    uri: "",
    profileImage:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFc0VrAIBRSuA/profile-displayphoto-shrink_800_800/0/1633861173349?e=1642032000&v=beta&t=KQSDtkGelY3Ix34O9v6thoGDFoTYrwGsQLgmCsTyk8U"
  },
  {
    id: "5",
    firstName: "",
    uri: "",
    profileImage: ""
  },
  {
    id: "6",
    firstName: "",
    uri: "",
    profileImage:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFc0VrAIBRSuA/profile-displayphoto-shrink_800_800/0/1633861173349?e=1642032000&v=beta&t=KQSDtkGelY3Ix34O9v6thoGDFoTYrwGsQLgmCsTyk8U"
  },
  {
    id: "7",
    firstName: "",
    uri: "",
    profileImage: ""
  }
];
// TODO: Make Two component : 1. for Avatar with Image 2. for Avatar with none Image
const HomeScreen = ({ navigation }) => {
  const Story = ({ data, id }) => (
    <View
      style={{
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Pressable
        onLongPress={() => {
          Alert.alert("See profile");
          navigation.navigate("Profile");
        }}
        onPress={() => console.log("See Story")}
      >
        <AvatarStory data={data} index={id} />
      </Pressable>
    </View>
  );
  const renderChat = ({ item, index }) => (
    <ChatCardList id={index} data={item} />
  );
  const StoriesList = ({ item, index }) => <Story id={index} data={item} />;
  return (
    <SafeAreaView style={globalStyles.container}>
      <View
        style={{
          height: 100,
          marginTop: 2
        }}
      >
        <Text
          style={{
            ...globalStyles.TitleText
          }}
        >
          Stories
        </Text>
        <View style={{ justifyContent: "space-evenly" }}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Stories}
            renderItem={StoriesList}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            ...globalStyles.TitleText,
            marginTop: 15
          }}
        >
          Messages
        </Text>
        <FlatList
          style={{ marginTop: 5 }}
          data={listChat}
          renderItem={renderChat}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
