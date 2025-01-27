import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltTwoProps {}

const EventsTiltTwo: FC<EventsTiltTwoProps> = (): React.JSX.Element => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          top: 150,
          backgroundColor: Colors.yellowButton,
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          paddingVertical: 22,
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}
      >
        <View>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 32,
              color: Colors.black,
              fontWeight: '900',
            }}
          >
            {'Конкурс'}
          </Text>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 18,
              color: Colors.black,
            }}
          >
            {'на Лучший Бургер'}
          </Text>
        </View>
        <Text
          style={{
            textAlign: 'right',
            fontWeight: '800',
            fontSize: 22,
            color: Colors.black,
          }}
        >
          {'30 августа\n18:00'}
        </Text>
      </View>
      <View style={{ position: 'absolute', bottom: 100, alignSelf: 'center', paddingHorizontal: 40, }}>
        <Text
          style={{
            color: Colors.white,
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '700',
          }}
        >
          Участники готовят свои бургеры, а посетители голосуют за лучший
        </Text>
      </View>
    </>
  );
};
export default EventsTiltTwo;
