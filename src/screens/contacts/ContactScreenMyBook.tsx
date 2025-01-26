import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../styles/Colors.ts';
import {KeyboardView} from '../../components/base/KeyboardView.tsx';
import Header from '../../components/Header.tsx';

const ContactScreenMyBook = (): React.JSX.Element => {
  const [phone, setPhone] = React.useState('');
  const [city, setCity] = React.useState('');
  const [indexNumber, setIndexNumber] = React.useState('');
  const [country, setCountry] = React.useState('');

    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <KeyboardView isScroll scrollViewStyle={{ paddingBottom: 50 }}>
          <Text style={{ color: Colors.black, fontSize: 22, fontWeight: '700', paddingHorizontal: 16 }}>Контакты</Text>
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
                keyboardType={'phone-pad'}
                placeholderTextColor={Colors.gray}
                placeholder={'Номер телефона'}
                value={phone}
                onChangeText={setPhone}
              />
            </View>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholderTextColor={Colors.gray}
                placeholder={'Город'}
                value={city}
                onChangeText={setCity}
              />
            </View>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                keyboardType={'phone-pad'}
                placeholderTextColor={Colors.gray}
                placeholder={'Индекс'}
                value={indexNumber}
                onChangeText={setIndexNumber}
              />
            </View>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholderTextColor={Colors.gray}
                placeholder={'Страна'}
                value={country}
                onChangeText={setCountry}
              />
            </View>
          </View>
        </KeyboardView>
      </SafeAreaView>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
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
    borderWidth: 1,
    borderColor: Colors.redButton,
    backgroundColor: Colors.white,
    borderRadius: 30,
  },
});
export default ContactScreenMyBook;
