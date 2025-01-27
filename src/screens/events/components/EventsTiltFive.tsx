import { type FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltFiveProps {}

const EventsTiltFive: FC<EventsTiltFiveProps> = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginBottom: -20,
          zIndex: 999,
          alignSelf: 'center',
          width: '70%',
          fontSize: 24,
          padding: 8,
          borderRadius: 100,
          textAlign: 'center',
          backgroundColor: Colors.yellowButton,
          color: Colors.black,
          fontWeight: '800',
        }}
      >
        Гурме-Бургер Ночь
      </Text>
      <View style={{ width: '100%', backgroundColor: Colors.white, paddingHorizontal: 30, paddingVertical: 20,}}>
        <Text
          style={{
            paddingHorizontal: 20,
            fontSize: 16,
            paddingTop: 10,
            textAlign: 'center',
            color: Colors.black,
            fontWeight: '500',
          }}
        >
          Эксклюзивное меню с гурме-бургерами, приготовленными из высококачественных ингредиентов.
        </Text>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 20, alignSelf: 'flex-end' }}>
        <Text
          style={{
            width: '60%',
            textAlign: 'center',
            fontSize: 20,
            color: Colors.white,
            fontWeight: '800',
          }}
        >
          3 ноября, 19:00
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
  },
});
export default EventsTiltFive;
