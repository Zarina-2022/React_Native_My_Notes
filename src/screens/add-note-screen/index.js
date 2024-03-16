import {useContext, useState} from 'react';
import React from 'react';
import MyContext from '../../context';

import {SafeAreaView, TextInput, View, Text} from 'react-native';

// import styles
import {ADD_NOTES, GENERAL_STYLE} from '../../styles/style';

//import components
import SaveButton from '../../components/buttons/save-button';
import MenuButtons from '../../components/buttons/menu-buttons';

export default function AddNotes({route, navigation}) {
  const {addNewNotes, updatedNote} = useContext(MyContext);

  const {note} = route?.params;
  const {type} = route?.params;

  const [title, setTitle] = useState(note?.title);
  const [description, setDescription] = useState(note?.description);
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  //! Add New Note Function
  const handleSave = e => {
    e.preventDefault();
    // Validation:
    if (!title) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }
    if (!description) {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }
    const form = {
      id: String(new Date().getTime()),
      title: title,
      description: description,
      date: new Date().toLocaleString(),
      read: false,
    };
    // add a new note and go to myNotes screen
    addNewNotes(form);
    navigation.goBack();
  };

  //! Update Function
  //! Update Function
  const handleUpdate = e => {
    e.preventDefault();
    // Validation:
    if (!title) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }
    if (!description) {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }
    const form = {
      id: note?.id || '', // Fallback to an empty string if note.id is undefined
      title: title,
      description: description,
      date: new Date().toLocaleString(),
    };
    // add updated note and go to myNotes screen
    updatedNote(note?.id, form); // Pass note?.id as the first argument
    navigation.goBack();
  };

  return (
    <SafeAreaView style={GENERAL_STYLE.container}>
      <View style={GENERAL_STYLE.container}>
        <View>
          <MenuButtons />
        </View>

        <View style={ADD_NOTES.container}>
          <Text style={ADD_NOTES.text}>Title:</Text>
          <TextInput
            style={ADD_NOTES.input}
            placeholder="Write here the title of your note."
            placeholderTextColor="gray"
            onChangeText={item => setTitle(item)}
            value={title}
          />
          {titleError && (
            <Text style={ADD_NOTES.error}>Please enter the title.</Text>
          )}
          <Text style={ADD_NOTES.text}>Description:</Text>
          <TextInput
            style={ADD_NOTES.input}
            placeholder="Write here the description of your note."
            placeholderTextColor="gray"
            onChangeText={item => setDescription(item)}
            value={description}
          />
          {descriptionError && (
            <Text style={ADD_NOTES.error}>Please enter description.</Text>
          )}
        </View>

        <View>
          <SaveButton
            title={type === 'update' ? 'update' : 'save'}
            onPress={type === 'update' ? handleUpdate : handleSave}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
