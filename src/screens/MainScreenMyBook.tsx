import { type FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../styles/Colors.ts';
import { Screen } from '../components/base/Screen.tsx';
import { IconComponent } from '../components/icon/IconComponent.tsx';
import { myBookMainList } from '../utils/common.ts';
import Screens from '../navigation/consts/screens.ts';
import Navigation from '../navigation/navigation.ts';

interface MainScreenProps {}

const MainScreenMyBook: FC<MainScreenProps> = (): React.JSX.Element => {
  const handleNavigate = (screen: Screens) => {
    Navigation.navigate(screen);
  };
  return (
    <Screen preset="auto" backgroundColor={Colors.redButton}>
      <View style={styles.container}>
        <IconComponent style={{ width: 150, height: 150 }} icon="logo" />
      </View>
      <Text
        style={{
          color: Colors.redButtonBlack,
          fontSize: 32,
          fontWeight: '900',
          textAlign: 'center',
          paddingTop: 24,
        }}
      >
        myBook
      </Text>
      <View style={{ paddingHorizontal: 16, marginBottom: 34, paddingTop: 12 }}>
        {myBookMainList.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => handleNavigate(item.screen)}
              key={item.id}
              activeOpacity={0.8}
              style={[
                styles.item,
                item.id === 1 && { backgroundColor: Colors.redButtonBlack },
              ]}
            >
              <Text
                style={{ color: Colors.white, fontSize: 18, fontWeight: '800' }}
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
        <IconComponent style={{ width: 50, height: 50 }} icon="basket_menu" />
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
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  item: {
    borderWidth: 1,
    marginBottom: 10,
    borderColor: Colors.white,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
});
export default MainScreenMyBook;
