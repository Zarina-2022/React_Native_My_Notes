import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/rootNavigator';
import React from 'react';
import Provider from './src/context/provider';

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
