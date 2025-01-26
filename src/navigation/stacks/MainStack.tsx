import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Screens from '../consts/screens.ts';
import MainScreenMyBook from '../../screens/MainScreenMyBook.tsx';
import MenuScreenMyBook from '../../screens/menu/MenuScreenMyBook.tsx';
import BasketScreenMyBook from '../../screens/basket/BasketScreenMyBook.tsx';
import BasketSuccessScreenMyBook from '../../screens/basket/BasketSuccessScreenMyBook.tsx';
import ReserveScreenMyBook from '../../screens/reserve/ReserveScreenMyBook.tsx';
import ReserveSuccessScreenMyBook from '../../screens/reserve/ReserveSuccessScreenMyBook.tsx';
import ContactScreenMyBook from '../../screens/contacts/ContactScreenMyBook.tsx';
import BroadcastScreenMyBook from '../../screens/broadcast/BroadcastScreenMyBook.tsx';
import EventsMainScreenMyBook from '../../screens/events/EventsMainScreenMyBook.tsx';
import EventsDetailScreenMyBook from '../../screens/events/EventsDetailScreenMyBook.tsx';

const Stack = createStackNavigator();

const MainStack = (): React.JSX.Element => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screens.MAIN_APP} component={MainScreenMyBook} />
        <Stack.Screen name={Screens.MENU} component={MenuScreenMyBook} />
        <Stack.Screen name={Screens.BASKET} component={BasketScreenMyBook} />
        <Stack.Screen name={Screens.BASKET_SUCCESS} component={BasketSuccessScreenMyBook} />
        <Stack.Screen name={Screens.RESERVE} component={ReserveScreenMyBook} />
        <Stack.Screen name={Screens.RESERVE_SUCCESS} component={ReserveSuccessScreenMyBook} />
        <Stack.Screen name={Screens.CONTACTS} component={ContactScreenMyBook} />
        <Stack.Screen name={Screens.BROADCAST} component={BroadcastScreenMyBook} />
        <Stack.Screen name={Screens.EVENTS} component={EventsMainScreenMyBook} />
        <Stack.Screen name={Screens.EVENTS_DETAIL} component={EventsDetailScreenMyBook} />
    </Stack.Navigator>
);
export default MainStack;
