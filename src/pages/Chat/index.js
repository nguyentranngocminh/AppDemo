import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { images } from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UIButton } from '../../components';
import styledLogin from '../Login/styled/StyledLogin';
import config from '../../config';
import UIHeader from '../../components/UIHeader';
import ChatItem from './ChatItem';
function Chat() {
  const [chatList, setChatList] = useState([
    {
      name: 'Influencer',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLWPsG4g9Qj_73ryq_x8hwgpQxa5WJ5RzqRFJM4Cz_HeTU1Pkm_E-wigJwzXPB-kCdXfE&usqp=CAU',
      message: 'hello',
      number: 2,
    },
    {
      name: 'Business',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLWPsG4g9Qj_73ryq_x8hwgpQxa5WJ5RzqRFJM4Cz_HeTU1Pkm_E-wigJwzXPB-kCdXfE&usqp=CAU',
      message: 'hello',
      number: 3,
    },
    {
      name: 'Individual',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLWPsG4g9Qj_73ryq_x8hwgpQxa5WJ5RzqRFJM4Cz_HeTU1Pkm_E-wigJwzXPB-kCdXfE&usqp=CAU',
      message: 'hello',
      number: 1,
    },
  ]);
  const pressLeftIconHandel = () => {
    alert('Left');
  };
  const pressRightIconHandel = () => {
    alert('Right');
  };

  return (
    <View style={styledLogin.bgLogin}>
      <UIHeader
        title="Chat Screen"
        leftIconName="arrow-left"
        rightIconName="bell"
        onPressLeftIcon={pressLeftIconHandel}
        onPressRightIcon={pressRightIconHandel}
      />
      <View
        style={{
          flex: 1,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <FlatList
          data={chatList}
          renderItem={({ item }) => (
            <ChatItem
              name={item.name}
              url={item.url}
              message={item.message}
              number={item.number}
              key={item.url}
              onPress={() => {
                alert('asdadasd');
              }}
            />
          )}
        />
      </View>
    </View>
  );
}
export default Chat;
