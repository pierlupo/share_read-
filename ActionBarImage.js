// 3 Ways to Add Image Icon Inside Navigation Bar in React Native
// https://aboutreact.com/react-native-image-icon-inside-navigation-bar/

import React from 'react';

import {View, Image} from 'react-native';

const ActionBarImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={require('./assets/images.jpg')}
        style={{
          width: 36,
          height: 36,
          borderRadius: 36 / 2,
          marginLeft: 15,
          marginRight: 15,
          // filter: invert(1),
        }}
      />
    </View>
  );
};

export default ActionBarImage;