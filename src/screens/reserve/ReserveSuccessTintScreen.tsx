import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../styles/Colors.ts';
import Navigation from '../../navigation/navigation.ts';
import Screens from '../../navigation/consts/screens.ts';

const ReserveSuccessTintScreen = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: Colors.black,
          fontSize: 24,
          marginBottom: 40,
          fontWeight: '600',
          textAlign: 'center',
          paddingVertical: 20,
          borderRadius: 20,
          width: '100%',
        }}
      >
        {'СТОЛИК\nЗАРЕЗЕРВИРОВАН!'}
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => Navigation.navigate(Screens.MAIN_APP)}
        style={{
          backgroundColor: Colors.yellowButton,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 40,
          width: '100%',
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: Colors.black,
            fontWeight: '600',
          }}
        >
          НА ГЛАВНУЮ
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
});
export default ReserveSuccessTintScreen;
