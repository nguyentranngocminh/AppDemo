import React, { Component, useState, useEffect } from 'react';
import { View, Text, TextInput, Image, ImageBackground, Keyboard } from 'react-native';
import { images } from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UIButton } from '../../components';
import styledLogin from '../Login/styled/StyledLogin';
import { isValidEmail, isValidPassword } from '../../utils/validate';
import config from '../../utils';
function Register(props) {
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
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  const [errEmail, setErrEmail] = useState('');
  const [errPassWord, setErrPassWord] = useState('');
  const [errRePassWord, setErrRePassWord] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShown(false);
    });
  });
  const ipErrStyle = {
    borderBottomColor: 'red',
  };
  const isValidateComplete = () =>
    email !== '' &&
    password !== '' &&
    rePassword !== '' &&
    rePassword !== password &&
    config.isValidEmail(email) &&
    config.isValidPassword(password);

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
        style={{ flex: 15 }}
      >
        <View
          style={{
            flex: 15,
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
              color: '#de9076',
              marginBottom: 7,
              fontWeight: 'bold',
            }}
          >
            Register
          </Text>
          <Text style={{ fontSize: 14, color: 'black' }}> Please select your acount type </Text>
        </View>
      </ImageBackground>
      <View style={{ flex: 30, paddingLeft: 10, paddingRight: 10 }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={styledLogin.ttlInput}>Email:</Text>
          <TextInput
            style={[styledLogin.cusInput, errEmail !== '' ? ipErrStyle : '']}
            placeholder="misha123@gmail.com"
            placeholderTextColor={styledLogin.placeholder}
            onChangeText={(text) => {
              setEmail(text);
              setErrEmail(config.isValidEmail(text) ? '' : 'email not in correct');
            }}
          />
          <Text style={{ color: 'red', marginTop: 5 }}>{errEmail}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styledLogin.ttlInput}>Password:</Text>
          <TextInput
            style={[styledLogin.cusInput, errPassWord !== '' ? ipErrStyle : '']}
            secureTextEntry={true}
            placeholder="Enter password"
            placeholderTextColor={styledLogin.placeholder}
            onChangeText={(text) => {
              setPassword(text);
              setErrPassWord(config.isValidPassword(text) ? '' : 'password not in correct');
            }}
          />
          <Text style={{ color: 'red', marginTop: 5 }}>{errPassWord}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styledLogin.ttlInput}>Retype Password:</Text>
          <TextInput
            style={[styledLogin.cusInput, errRePassWord !== '' ? ipErrStyle : '']}
            secureTextEntry={true}
            placeholder="Enter password"
            placeholderTextColor={styledLogin.placeholder}
            onChangeText={(text) => {
              setRePassword(text);
              setErrRePassWord(text === password ? '' : 'password not match');
            }}
          />
          <Text style={{ color: 'red', marginTop: 5 }}>{errRePassWord}</Text>
        </View>
      </View>
      {!keyboardIsShown && (
        <View style={{ flex: 20 }}>
          <View
            style={{
              flex: 15,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <UIButton
              title={'Register now'.toUpperCase()}
              isShowIcon={false}
              disabled={!isValidateComplete()}
              onPress={() => {
                isValidateComplete();
              }}
            />
            <Text style={{ fontSize: 15, color: 'black', alignSelf: 'center' }}>
              Want to login?
            </Text>
          </View>
          <View
            style={{
              flex: 15,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <View
              style={{
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 10,
              }}
            >
              <View style={{ height: 1, backgroundColor: '#CCC', flex: 1 }} />
              <Text
                style={{
                  padding: 8,
                  fontSize: 14,
                  color: '#000',
                  alignSelf: 'center',
                  marginHorizontal: 10,
                }}
              >
                Use other methods?
              </Text>
              <View style={{ height: 1, backgroundColor: '#CCC', flex: 1 }} />
            </View>
            {/* <Text style={{ fontSize: 15, color: 'black', alignSelf: 'center' }}>Want to sign in?</Text> */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 10,
              }}
            >
              <Icon
                name="facebook"
                style={{
                  marginRight: 10,
                  color: 'blue',
                  fontSize: 30,
                }}
              />
              <Icon
                name="google"
                style={{
                  color: 'red',
                  fontSize: 30,
                }}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
export default Register;
