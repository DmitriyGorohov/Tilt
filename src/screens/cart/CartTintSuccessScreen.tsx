import React, { type FC } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../styles/Colors.ts';
import Navigation from '../../navigation/navigation.ts';
import Screens from '../../navigation/consts/screens.ts';
import {useDispatch} from 'react-redux';
import {resetProductToCart} from '../../store/shop/shopTintSlice.ts';
import {IconComponent} from '../../components/icon/IconComponent.tsx';

interface BasketSuccsessScreenProps {}

const CartTintSuccessScreen: FC<
  BasketSuccsessScreenProps
> = (): React.JSX.Element => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: '900', marginBottom: 40 }}>
        {'Благодарим\nза заказ!'}
      </Text>
      <IconComponent icon='qr' style={{ width: 200, height: 200 }} />
      <View
        style={{
          position: 'absolute',
          bottom: 40,
          alignSelf: 'center',
          paddingHorizontal: 16,
          width: '100%',
          paddingTop: 12,
          backgroundColor: Colors.white,
          zIndex: 999,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            dispatch(resetProductToCart());
            Navigation.navigate(Screens.MAIN_APP);
          }}
          activeOpacity={0.8}
          style={{
            borderRadius: 12,
            backgroundColor: Colors.yellowButton,
            paddingVertical: 12,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: Colors.white, fontSize: 26, fontWeight: '900' }}>
            НА ГЛАВНУЮ
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
});
export default CartTintSuccessScreen;
