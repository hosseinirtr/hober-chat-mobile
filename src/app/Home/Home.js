
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const listChat = [{
    id: "10", image: "", firstName: "Faezeh", lastName: "", lastMessage: "سلام", active: false, notificationNumber: "1"
}, {
    id: "11", image: "", firstName: "Ali", lastName: "", lastMessage: "Hi", active: false, notificationNumber: "0"
}, {
    id: "12", image: "", firstName: "", lastName: "", lastMessage: "", active: false, notificationNumber: "0"
}, {
    id: "13", image: "", firstName: "", lastName: "", lastMessage: "", active: false, notificationNumber: "0"
}, {
    id: "14", image: "", firstName: "", lastName: "", lastMessage: "", active: false, notificationNumber: "0"
}, {
    id: "15", image: "", firstName: "", lastName: "", lastMessage: "", active: false, notificationNumber: ""
}]


const CardList = ({ id, image, firstName, lastName, lastMessage, notificationNumber }) => (
    <View key={id} style={{
        flex: 1, flexDirection: "row", height: 70, borderRadius: 15, borderColor: "#ABB8C3", width: "90%", backgroundColor: '#fff', marginHorizontal: 10, marginVertical: 5, shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black', elevation: 1,
        shadowOpacity: 0.2, alignSelf: "center", alignItems: "center",
    }}>
        <View id="image" style={{ flex: 1, justifyContent: "center", alignItems: "center", }}><View style={{ backgroundColor: "red", borderRadius: 25, width: 50, height: 50 }} /></View>
        <View id="main" style={{ flex: 3, flexDirection: "column", }}>
            <Text id="name" style={{
                fontSize: 18, fontWeight: "bold", textAlign: "left", alignItems: "center",
            }}>{firstName ? firstName : "" + " " + lastName ? lastName : ""}</Text>
            <Text id="message" style={{ fontSize: 12, alignItems: "center", }}>{lastMessage}</Text>
        </View>
        {notificationNumber != 0 && notificationNumber ? (
            <View id="notification" style={{ flex: 1, }}><Text style={{ textAlign: "center", alignSelf: "flex-end", marginRight: 10, color: "#fff", borderRadius: 20, backgroundColor: "#8ED1FC", width: 20, height: 20 }} >{notificationNumber}</Text></View>
        ) : (
            <View id="notification" style={{ flex: 1, }}><Text style={{ textAlign: "center", alignSelf: "flex-end", marginRight: 10, color: "#fff", borderRadius: 20, backgroundColor: 'transparent', width: 20, height: 20 }} ></Text></View>
        )}
    </View>
)

const HomeScreen = () => {
    const renderItem = ({ item, index }) => (
        <CardList id={index} firstName={item.firstName} lastMessage={item.lastMessage} notificationNumber={item.notificationNumber} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                style={{ marginTop: 5 }}
                data={listChat}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 32,
    },
});

export default HomeScreen;