import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltOneProps {}

const EventsTiltOne: FC<EventsTiltOneProps> = (): React.JSX.Element => {
  return (
    <View style={{ position: 'absolute', top: 150, right: 20 }}>
      <Text
        style={{
          textAlign: 'right',
          fontSize: 32,
          color: Colors.black,
          fontWeight: '900',
        }}
      >
        {'Ретро-Бургер\nНайт'}
      </Text>
      <Text
        style={{
          textAlign: 'right',
          fontSize: 18,
          color: Colors.black,
        }}
      >
        {'Возвращение\nклассических\nбургеров 80-х'}
      </Text>
      <Text
        style={{
          padding: 10,
          backgroundColor: Colors.background,
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 22,
          color: Colors.white,
        }}
      >
        {'12 декабря\n19:00'}
      </Text>
    </View>
  );
};
export default EventsTiltOne;
