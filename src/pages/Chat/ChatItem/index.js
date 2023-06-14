import React, { useState } from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
function ChatItem({ name, url, message, number, onPressNotification }) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        color: 'black',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: 150,
        padding: 10,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{
            uri: url,
          }}
          style={{
            width: 60,
            height: 60,
            marginRight: 10,
            borderRadius: 30,
          }}
        />
        <Text
          style={{
            position: 'absolute',
            right: 10,
            fontSize: 12,
            backgroundColor: 'red',
            color: '#FFF',
            borderRadius: 10,
            paddingHorizontal: 5,
          }}
        >
          {number}
        </Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ fontSize: 15, color: 'black' }}>{name}</Text>
        <Text style={{ fontSize: 12, color: 'gray', marginTop: 6 }}>{message}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default ChatItem;
