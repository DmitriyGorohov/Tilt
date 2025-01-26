import { type RouteProp } from '@react-navigation/native';
import Screens from '../../navigation/consts/screens';
import { IconTypes } from '../../components/icon/icons';

export type MainStackParamsList = {
  [Screens.EVENTS_DETAIL]: {
    iconName: IconTypes;
  };
};

export type EventDetailsRouteProps = RouteProp<
  MainStackParamsList,
  Screens.EVENTS_DETAIL
>;
