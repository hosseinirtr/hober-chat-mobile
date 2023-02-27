import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Pressable,
  Alert,
  Modal,
} from 'react-native';
import globalStyles from '../../Styles/GlobalStyle';
import listChat from '../FakeData/ChatList';
import {Stories} from '../FakeData/Stories';
import {AvatarStory} from '../partical/AvatarUser';
import {ChatCardList} from '../partical/ChatChard';

// TODO: Make Two component : 1. for Avatar with Image 2. for Avatar with none Image
const HomeScreen = ({navigation}) => {
  const Story = ({data, id}) => (
    <View
      style={{
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        onLongPress={() => {
          Alert.alert('See profile');
          navigation.navigate('Profile');
        }}
        onPress={() => console.log('See Story')}>
        <AvatarStory data={data} index={id} />
      </Pressable>
    </View>
  );
  const renderChat = ({item, index}) => <ChatCardList id={index} data={item} />;
  const StoriesList = ({item, index}) => <Story id={index} data={item} />;
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
            renderItem={StoriesList}
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
          renderItem={renderChat}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
