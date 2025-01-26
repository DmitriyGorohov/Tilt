import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../styles/Colors.ts';
import { KeyboardView } from '../../components/base/KeyboardView.tsx';
import Header from '../../components/Header.tsx';
import Navigation from '../../navigation/navigation.ts';
import Screens from '../../navigation/consts/screens.ts';

const ReserveTintScreen = (): React.JSX.Element => {
  const [firstName, setFirstName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [tableName, setTableName] = React.useState('');
  const [time, setTime] = React.useState('');
  const [date, setDate] = React.useState('');

  const disabled =
    firstName === '' ||
    phoneNumber === '' ||
    tableName === '' ||
    time === '' ||
    date === '';

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <KeyboardView isScroll scrollViewStyle={{ paddingBottom: 50 }}>
        <Text style={{ color: Colors.black, fontSize: 22, fontWeight: '700', paddingHorizontal: 16 }}>Реезрв столика</Text>
        <View
          style={{
            flex: 1,
            paddingTop: 20,
            paddingBottom: 50,
          }}
        >
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholderTextColor={Colors.gray}
              placeholder={'Имя...'}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              keyboardType={'phone-pad'}
              placeholderTextColor={Colors.gray}
              placeholder={'Номер телефона'}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholderTextColor={Colors.gray}
              placeholder={'Столик'}
              value={tableName}
              onChangeText={setTableName}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholderTextColor={Colors.gray}
              placeholder={'Время'}
              value={time}
              onChangeText={setTime}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholderTextColor={Colors.gray}
              placeholder={'Дата'}
              value={date}
              onChangeText={setDate}
            />
          </View>
        </View>
      </KeyboardView>
      <Pressable
        onPress={
          disabled
            ? null
            : () => {
                Navigation.navigate(Screens.RESERVE_SUCCESS);
              }
        }
        style={{
          borderRadius: 12,
          backgroundColor: Colors.yellowButton,
          paddingVertical: 12,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          width: '100%',
          position: 'absolute',
          bottom: 40,
          opacity: disabled ? 0.5 : 1,
        }}
      >
        <Text
          style={{
            color: Colors.white,
            fontSize: 16,
            textTransform: 'uppercase',
            fontWeight: '900',
          }}
        >
          Зарезервировать
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  cartIcon: {
    width: 24,
    height: 24,
  },
  cartText: {
    color: 'white',
    fontWeight: 'bold',
  },
  form: {
    marginBottom: 16,
  },
  input: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 16,
    width: '100%',
    height: 50,
    backgroundColor: Colors.pink,
    borderRadius: 30,
  },
});
export default ReserveTintScreen;
