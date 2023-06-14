import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { images } from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UIButton } from '../../components';
import styledLogin from '../Login/styled/StyledLogin';
import config from '../../config';
function Screen() {
  const [accountType, setAccountType] = useState([
    {
      title: 'Influencer',
      isShowIcon: true,
    },
    {
      title: 'Business',
      isShowIcon: false,
    },
    {
      title: 'Individual',
      isShowIcon: false,
    },
  ]);
  return (
    <View style={styledLogin.bgLogin}>
      <View
        style={{
          flexDirection: 'row',
          color: 'black',
          // backgroundColor: 'rgba(255, 255, 255, 0.4)',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flex: 5,
          padding: 10,
        }}
      >
        {/* <Image
          source=""
          style={{
            width: 30,
            height: 30,
            marginRight: 10,
          }}
        /> */}
        <Icon
          name="heart"
          style={{
            marginRight: 10,
            fontSize: 20,
            color: '#de9076',
          }}
        />
        <Text style={{ fontSize: 20, color: 'black' }}>Chat screen</Text>
        <View style={{ flex: 1 }} />
        <Image
          source=""
          style={{
            width: 30,
            height: 30,
            tintColor: 'black',
          }}
        />
      </View>
      <ImageBackground
        source={styledLogin.bgImage}
        // imageStyle={{
        //   resizeMode: 'contain',
        //   alignSelf: 'flex-start',
        // }}
        style={{ flex: 20 }}
      >
        <View
          style={{
            flex: 20,
            paddingLeft: 10,
            paddingRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 14, color: 'black', marginBottom: 7 }}>
            Wellcome to chat screen
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              marginBottom: 7,
              fontWeight: 'bold',
            }}
          >
            Chat screen!
          </Text>
          <Text style={{ fontSize: 14, color: 'black' }}> Please select your acount type </Text>
        </View>
      </ImageBackground>
      <View style={{ flex: 40, paddingLeft: 10, paddingRight: 10 }}>
        {accountType.map((item, index) => (
          <UIButton
            key={index}
            onPress={() => {
              let newItemType = accountType.map((eachItem) => {
                return {
                  ...eachItem,
                  isShowIcon: eachItem.title == item.title,
                };
              });
              setAccountType(newItemType);
            }}
            title={item.title}
            isShowIcon={item.isShowIcon}
          />
        ))}
      </View>
      <View
        style={{
          flex: 20,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <UIButton
          onPress={() => {
            alert('login');
          }}
          title={'Login'.toUpperCase()}
          isShowIcon={false}
        />
        <Text style={{ fontSize: 15, color: 'black', alignSelf: 'center' }}>
          Want to register account?
        </Text>
      </View>
    </View>
  );
}
export default Screen;
