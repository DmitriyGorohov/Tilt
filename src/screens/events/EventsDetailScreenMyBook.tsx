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
import { EventDetailsRouteProps } from '../../types/stacks/MainStacksTypeMyBook.ts';
import { IconTypes } from '../../components/icon/icons';

const EventsDetailScreenMyBook = (): React.JSX.Element => {
  const {
    params: { iconName },
  } = useRoute<EventDetailsRouteProps>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Navigation.pop()}
        activeOpacity={1}
        style={{
          position: 'absolute',
          zIndex: 999,
          top: 0,
          width: '100%',
          height: 100,
          backgroundColor: 'red',
        }}
      >
        <IconComponent
          style={{ width: 40, height: 40, marginTop: 50, marginLeft: 20 }}
          icon={'eventsBack'}
        />
      </TouchableOpacity>
      <IconComponent
        style={{
          width: Dimensions.get('window').width,
          height:
            Platform.OS === 'ios'
              ? Dimensions.get('window').height
              : Dimensions.get('window').height + 50,
          marginTop: 25,
        }}
        icon={iconName as IconTypes}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
export default EventsDetailScreenMyBook;
