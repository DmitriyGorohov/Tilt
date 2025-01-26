import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet } from 'react-native';
import { Host } from 'react-native-portalize';
import { persistor, store } from './src/store/store.ts';
import Routes from './src/navigation/Routes.tsx';

const AppWrapper = () => {
  return (
    <GestureHandlerRootView style={styles.rootContainer}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent
      />
      <Host>
        <Routes />
      </Host>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default AppWrapper;
