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
        return 'eventsTint1';
      case 2:
        return 'eventsTint2';
      case 3:
        return 'eventsTint3';
      case 4:
        return 'eventsTint4';
      case 5:
        return 'eventsTint5';
      default:
        return 'eventsTint1';
    }
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header isCenter={false} />
      <View style={styles.containerE}>
        <IconComponent
          style={{ width: 150, height: 150, marginBottom: 60 }}
          icon="logoTint"
        />
      </View>
      <View
        style={{
          marginTop: -20,
          paddingTop: 40,
          paddingHorizontal: 40,
          flex: 1,
          backgroundColor: Colors.background,
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
              style={{ color: Colors.black, fontSize: 22, fontWeight: '600' }}
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
          <IconComponent style={{ width: 50, height: 50 }} icon="cartMain" />
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
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginBottom: 24,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});
export default EventsMainTintScreen;
