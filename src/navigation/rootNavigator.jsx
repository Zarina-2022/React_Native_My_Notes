/* eslint-disable react/no-unstable-nested-components */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

//import utils
import {COLORS} from '../theme/colors';
import {SCREENS} from '../utils/routes';

// import components
import HeaderRight from '../components/buttons/header-right';

// screens imports
import MyNotes from '../screens/my-notes-screen';
import AddNotes from '../screens/add-note-screen';
import NoteDetails from '../screens/note-details-screen';

export default function RootNavigator() {
  const {myNotes, addNotes, noteDetails} = SCREENS;
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
        headerTintColor: COLORS.secondary,
      }}>
      <Stack.Screen
        name={myNotes}
        component={MyNotes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={addNotes}
        component={AddNotes}
        options={{headerRight: () => <HeaderRight />}}
      />
      <Stack.Screen name={noteDetails} component={NoteDetails} />
    </Stack.Navigator>
  );
}
