import React from 'react';
import {SafeAreaView, View, FlatList, Text} from 'react-native';
import globalStyles from '../../Styles/GlobalStyle';
import listChat from '../FakeData/ChatList';
import {Stories} from '../FakeData/Stories';
import {ChatCardList} from '../partical/ChatChard';
import Story from '../partical/story/Story';

// TODO: Make Two component : 1. for Avatar with Image 2. for Avatar with none Image
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View
        style={{
          height: 100,
          marginTop: 2,
        }}>
        <Text
          style={{
            ...globalStyles.TitleText,
          }}>
          Stories
        </Text>
        <View style={{justifyContent: 'space-evenly'}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Stories}
            renderItem={({item, index}) => <Story id={index} data={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            ...globalStyles.TitleText,
            marginTop: 15,
          }}>
          Messages
        </Text>
        <FlatList
          style={{marginTop: 5}}
          data={listChat}
          renderItem={({item, index}) => (
            <ChatCardList id={index} data={item} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
