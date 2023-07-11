import React from 'react';
import {Pressable, Alert, Modal, View} from 'react-native';
import {AvatarStory} from '../AvatarUser';

export default function Story({data, id}) {
  return (
    <>
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
    </>
  );
}
