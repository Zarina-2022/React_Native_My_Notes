import {SafeAreaView, FlatList, View} from 'react-native';
import React, {useContext} from 'react';
import MyContext from '../../context';

// components imports
import Header from '../../components/header';
import AddButton from '../../components/buttons/add-button';
import NotesCard from '../../components/screens-components/notes-card';

// utils imports
import {SCREENS} from '../../utils/routes';

// Style import
import {GENERAL_STYLE} from '../../styles/style';

export default function MyNotes({navigation}) {
  const {notes} = useContext(MyContext);

  // Navigation screen
  const {addNotes} = SCREENS;

  return (
    <SafeAreaView style={GENERAL_STYLE.container}>
      <View style={GENERAL_STYLE.container}>
        <Header />
        <FlatList
          data={notes}
          renderItem={({item}) => (
            <NotesCard item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
        <AddButton
          onPress={() => navigation.navigate(addNotes, {type: 'add'})}
        />
      </View>
    </SafeAreaView>
  );
}
