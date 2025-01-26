import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Screens from '../consts/screens.ts';
import MainTintScreen from '../../screens/MainTintScreen.tsx';
import MenuTintScreen from '../../screens/menu/MenuTintScreen.tsx';
import CartTintScreen from '../../screens/cart/CartTintScreen.tsx';
import CartTintSuccessScreen from '../../screens/cart/CartTintSuccessScreen.tsx';
import ReserveTintScreen from '../../screens/reserve/ReserveTintScreen.tsx';
import ReserveSuccessTintScreen from '../../screens/reserve/ReserveSuccessTintScreen.tsx';
import ContactTintScreen from '../../screens/contacts/ContactTintScreen.tsx';
import BroadcastTintScreen from '../../screens/broadcast/BroadcastTintScreen.tsx';
import EventsMainTintScreen from '../../screens/events/EventsMainTintScreen.tsx';
import EventsDetailTintScreen from '../../screens/events/EventsDetailTintScreen.tsx';

const Stack = createStackNavigator();

const MainStack = (): React.JSX.Element => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screens.MAIN_APP} component={MainTintScreen} />
        <Stack.Screen name={Screens.MENU} component={MenuTintScreen} />
        <Stack.Screen name={Screens.BASKET} component={CartTintScreen} />
        <Stack.Screen name={Screens.BASKET_SUCCESS} component={CartTintSuccessScreen} />
        <Stack.Screen name={Screens.RESERVE} component={ReserveTintScreen} />
        <Stack.Screen name={Screens.RESERVE_SUCCESS} component={ReserveSuccessTintScreen} />
        <Stack.Screen name={Screens.CONTACTS} component={ContactTintScreen} />
        <Stack.Screen name={Screens.BROADCAST} component={BroadcastTintScreen} />
        <Stack.Screen name={Screens.EVENTS} component={EventsMainTintScreen} />
        <Stack.Screen name={Screens.EVENTS_DETAIL} component={EventsDetailTintScreen} />
    </Stack.Navigator>
);
export default MainStack;
