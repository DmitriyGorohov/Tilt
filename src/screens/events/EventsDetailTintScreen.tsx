import {
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { IconComponent } from '../../components/icon/IconComponent.tsx';
import Colors from '../../styles/Colors.ts';
import Navigation from '../../navigation/navigation.ts';
import { useRoute } from '@react-navigation/native';
import { EventDetailsRouteProps } from '../../types/stacks/MainTintStacksType.ts';
import { IconTypes } from '../../components/icon/icons';
import React from 'react';
import EventsTiltOne from './components/EventsTiltOne.tsx';
import EventsTiltTwo from './components/EventsTiltTwo.tsx';
import EventsTiltTree from './components/EventsTiltTree.tsx';
import EventsTiltFour from './components/EventsTiltFour.tsx';
import EventsTiltFive from './components/EventsTiltFive.tsx';

const EventsDetailTintScreen = (): React.JSX.Element => {
  const {
    params: { iconName },
  } = useRoute<EventDetailsRouteProps>();
  console.log(iconName);

  const renderView = (): React.JSX.Element => {
    switch (iconName) {
      case 'eventsTint1':
        return <EventsTiltOne />
      case 'eventsTint2':
        return <EventsTiltTwo />
      case 'eventsTint3':
        return <EventsTiltTree />
      case 'eventsTint4':
        return <EventsTiltFour />
      case 'eventsTint5':
        return <EventsTiltFive />
      default:
        return <View />;
    }
  };

  return (
    <View style={[styles.container, iconName === 'eventsTint4' || iconName === 'eventsTint5' ? { backgroundColor: Colors.transparent } : { backgroundColor: Colors.yellowButton }]}>
      <TouchableOpacity style={{ backgroundColor: iconName === 'eventsTint4' || iconName === 'eventsTint5' ? Colors.yellowButton : Colors.transparent }} onPress={() => Navigation.pop()} activeOpacity={1}>
        <IconComponent
          style={{ width: 40, height: 40, marginTop: 50, marginLeft: 20 }}
          icon={'backTint'}
        />
      </TouchableOpacity>
      <IconComponent
        style={{
          width: Dimensions.get('window').width,
          height:
            Platform.OS === 'ios'
              ? Dimensions.get('window').height
              : Dimensions.get('window').height + 50,
        }}
        icon={iconName as IconTypes}
      />
      {renderView()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default EventsDetailTintScreen;
