import { type FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltFourProps {}

const EventsTiltFour: FC<EventsTiltFourProps> = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          paddingHorizontal: 20,
          fontSize: 32,
          color: Colors.white,
          fontWeight: '800',
        }}
      >
        {'Ночь\nГастрономических\nЭкспериментов'}
      </Text>
      <View
        style={{
          width: '40%',
          height: 6,
          borderRadius: 100,
          backgroundColor: Colors.yellowButton,
          marginHorizontal: 20,
          marginVertical: 10,
        }}
      />
      <Text
        style={{
          paddingHorizontal: 20,
          fontSize: 16,
          color: Colors.white,
          fontWeight: '500',
        }}
      >
        Откройте для себя необычные сочетания вкусов с нашими экспериментальными бургерами. Для истинных гурманов!
      </Text>
      <View style={{ paddingHorizontal: 20, marginTop: 20,}}>
        <Text
          style={{
            width: '60%',
            textAlign: 'center',
            padding: 8,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: Colors.yellowButton,
            fontSize: 20,
            color: Colors.yellowButton,
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
    bottom: 200,
  },
});
export default EventsTiltFour;
