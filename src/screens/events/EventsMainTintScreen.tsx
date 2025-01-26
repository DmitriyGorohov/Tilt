import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../styles/Colors.ts';
import Header from '../../components/Header.tsx';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconComponent } from '../../components/icon/IconComponent.tsx';
import { tintEventsList } from '../../utils/common.ts';
import Screens from '../../navigation/consts/screens.ts';
import Navigation from '../../navigation/navigation.ts';
import { IconTypes } from '../../components/icon/icons';

const EventsMainTintScreen = (): React.JSX.Element => {
  const handleSwitchIconName = (id: number): IconTypes => {
    switch (id) {
      case 1:
        return 'events4';
      case 2:
        return 'events1';
      case 3:
        return 'events2';
      case 4:
        return 'events3';
      case 5:
        return 'events5';
      default:
        return 'events1';
    }
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header />
      <View style={styles.containerE}>
        <IconComponent
          style={{ width: 150, height: 150, marginBottom: 60 }}
          icon="logo"
        />
      </View>
      <View
        style={{
          marginTop: -20,
          paddingTop: 40,
          paddingHorizontal: 16,
          flex: 1,
          backgroundColor: Colors.yellowButton,
        }}
      >
        {tintEventsList.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              Navigation.navigate(Screens.EVENTS_DETAIL, {
                iconName: handleSwitchIconName(item.id),
              })
            }
            activeOpacity={0.8}
            style={styles.item}
          >
            <Text
              style={{ color: Colors.white, fontSize: 18, fontWeight: '800' }}
            >
              {item.value}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={() => Navigation.navigate(Screens.BASKET)}
          activeOpacity={0.8}
          style={{ alignSelf: 'center', marginTop: 30 }}
        >
          <IconComponent style={{ width: 50, height: 50 }} icon="basket_menu" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  containerE: {
    zIndex: 999,
    backgroundColor: Colors.white,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
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
export default EventsMainTintScreen;
