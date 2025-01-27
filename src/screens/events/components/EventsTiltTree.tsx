import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltTreeProps {}

const EventsTiltTree: FC<EventsTiltTreeProps> = (): React.JSX.Element => {
  return (
    <View
      style={{
        position: 'absolute',
        top: '40%',
        alignSelf: 'center',
        width: '70%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: Colors.yellowButton,
        borderRadius: 16,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 32,
          color: Colors.black,
          fontWeight: '900',
          marginBottom: 12,
        }}
      >
        Бургер-Пати
      </Text>
      <Text
        style={{
          padding: 10,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: Colors.black,
          textAlign: 'center',
          fontWeight: '500',
          fontSize: 16,
          color: Colors.black,
        }}
      >
        Каждую пятницу, 18:00
      </Text>
      <Text
        style={{
          paddingHorizontal: 20,
          marginTop: 16,
          textAlign: 'center',
          fontSize: 12,
          color: Colors.black,
        }}
      >
        Вечеринка с DJ и специальными бургерами. Скидки на напитки и уникальные
        сочетания ингредиентов!
      </Text>
    </View>
  );
};
export default EventsTiltTree;
