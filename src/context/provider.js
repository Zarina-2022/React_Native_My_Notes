import React, {useState} from 'react';
import MyContext from '.';
import {Alert} from 'react-native';

const Provider = ({children}) => {
  const [notes, setNotes] = useState([
    {
      id: '1',
      title: 'Design Engineer',
      description: 'Professional creative design engineer at Tweeter',
      date: '12:25 pm',
      read: false,
    },
    {
      id: '2',
      title: 'Senior Design Engineer',
      description:
        'Experienced design engineer specializing in innovative solutions',
      date: '1:45 pm',
      read: false,
    },
    {
      id: '3',
      title: 'Product Design Specialist',
      description:
        'Expert in product design, contributing to cutting-edge technologies',
      date: '2:30 pm',
      read: false,
    },
  ]);

  const deleteNote = id => {
    if (id) {
      const updatedItems = notes.filter(item => item.id !== id);
      setNotes(updatedItems);
      Alert.alert('The note is successfully deleted.');
    } else {
      Alert.alert('The note that you want delete is not exist.');
    }
  };
  const addNewNotes = item => {
    if (item) {
      setNotes([...notes, item]);
      Alert.alert('New note is added successfully.');
    }
  };
  const updatedNote = (id, item) => {
    const updatedItems = notes.map(note =>
      note.id === id
        ? {
            ...note,
            title: item.title,
            description: item.description,
            read: true,
          }
        : note,
    );
    setNotes(updatedItems);
    Alert.alert('Note is successfully updated.');
  };

  return (
    <MyContext.Provider
      value={{notes, setNotes, deleteNote, addNewNotes, updatedNote}}>
      {children}
    </MyContext.Provider>
  );
};
export default Provider;
