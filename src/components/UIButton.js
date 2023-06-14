import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// function UIButton(props) {
//   return (
//     <Text>{props.title}</Text>
//   )
// }
function UIButton({ onPress, title, isShowIcon, disabled }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderWidth: 1,
        borderColor: disabled ? '#CCC' : '#de9076',
        backgroundColor: disabled ? '#CCC' : '#de9076',
        height: 40,
        borderRadius: 3,
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {isShowIcon && (
        <Icon
          name={'arrow-circle-right'}
          backgroundColor="#3b5998"
          style={{
            position: 'absolute',
            top: 12,
            left: 10,
            fontSize: 15,
            color: 'black',
          }}
        />
      )}
      <Text style={{ color: '#FFF', fontWeight: 'bold' }}>{title}</Text>
    </TouchableOpacity>
  );
}
export default UIButton;
