import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IconComponent } from './icon/IconComponent.tsx';
import Navigation from '../navigation/navigation.ts';
import Screens from '../navigation/consts/screens.ts';

const Header = (): React.JSX.Element => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => Navigation.pop()} activeOpacity={0.8}>
      <IconComponent style={{ width: 30, height: 30 }} icon={'burgerMenu'} />
    </TouchableOpacity>
    <IconComponent style={{ width: 50, height: 50 }} icon={'logoHeader'} />
    <TouchableOpacity
      onPress={() => Navigation.navigate(Screens.BASKET)}
      activeOpacity={0.8}
    >
      <IconComponent style={{ width: 30, height: 30 }} icon={'cartHeader'} />
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 32,
  },
});
export default Header;
