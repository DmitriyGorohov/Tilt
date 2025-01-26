import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../styles/Colors.ts';
import { Screen } from '../components/base/Screen.tsx';
import { IconComponent } from '../components/icon/IconComponent.tsx';
import { tintMainList } from '../utils/common.ts';
import Screens from '../navigation/consts/screens.ts';
import Navigation from '../navigation/navigation.ts';

const MainTintScreen = (): React.JSX.Element => {
  const handleNavigate = (screen: Screens) => {
    Navigation.navigate(screen);
  };
  return (
    <Screen preset="auto" backgroundColor={Colors.background}>
      <View style={styles.container}>
        <IconComponent style={{ width: 200, height: 150 }} icon="logoTint" />
      </View>
      <View style={{ paddingHorizontal: 56, marginBottom: 34, paddingTop: 32 }}>
        {tintMainList.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => handleNavigate(item.screen)}
              key={item.id}
              activeOpacity={0.8}
              style={styles.item}
            >
              <Text
                style={{ color: Colors.black, fontSize: 18, fontWeight: '800' }}
              >
                {item.value}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => handleNavigate(Screens.BASKET)}
        activeOpacity={0.8}
        style={{ alignSelf: 'center' }}
      >
        <IconComponent style={{ width: 50, height: 50 }} icon="cartMain" />
      </TouchableOpacity>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: 250,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginBottom: 24,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
});
export default MainTintScreen;
