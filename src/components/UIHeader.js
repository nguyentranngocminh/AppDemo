import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../constants';
function UIHeader({ title, leftIconName, rightIconName, onPressLeftIcon, onPressRightIcon }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 55,
        padding: 10,
        backgroundColor: color.primary,
      }}
    >
      <Icon
        name={leftIconName}
        style={{
          marginRight: 10,
          fontSize: 20,
          color: '#FFF',
        }}
        onPress={onPressLeftIcon}
      />
      <Text style={{ fontSize: 20, color: '#FFF' }}>{title}</Text>
      <View style={{ flex: 1 }} />
      {rightIconName && (
        <Icon
          name={rightIconName}
          style={{
            marginRight: 10,
            fontSize: 20,
            color: '#FFF',
          }}
          onPress={onPressRightIcon}
        />
      )}
    </View>
  );
}
export default UIHeader;
