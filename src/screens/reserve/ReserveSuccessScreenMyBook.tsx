import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../styles/Colors.ts';
import { IconComponent } from '../../components/icon/IconComponent.tsx';
import Navigation from '../../navigation/navigation.ts';
import Screens from '../../navigation/consts/screens.ts';

const ReserveSuccessScreenMyBook = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: Colors.white,
          fontSize: 24,
          marginBottom: 40,
          fontWeight: '800',
          textAlign: 'center',
          paddingVertical: 20,
          borderRadius: 20,
          width: '100%',
          backgroundColor: Colors.redButton,
        }}
      >
        СТОЛИК ЗАРЕЗЕРВИРОВАН!
      </Text>
      <IconComponent
        style={{ width: 200, height: 200 }}
        icon={'reserve_success'}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => Navigation.navigate(Screens.MAIN_APP)}
        style={{
          backgroundColor: Colors.redButton,
          borderRadius: 12,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 40,
          width: '100%',
          paddingVertical: 12,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: Colors.white,
            fontWeight: '800',
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
export default ReserveSuccessScreenMyBook;
