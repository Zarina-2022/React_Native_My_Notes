/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {COLORS} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import MyContext from '../../context';

//import icons
import {Trash, NotificationCircle, Edit} from 'iconsax-react-native';

// import styles
import {NOTE_CARD} from '../../styles/style';

//import screens
import {SCREENS} from '../../utils/routes';

export default function NotesCard({item}) {
  const navigation = useNavigation();
  const {noteDetails, addNotes} = SCREENS;
  const {deleteNote} = useContext(MyContext);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(noteDetails, {note: item})}>
      <View style={NOTE_CARD.container}>
        <View style={{flex: 1, alignItems: 'center', marginTop: 4}}>
          <NotificationCircle
            color={!item.read ? COLORS.gray : COLORS.green}
            size="16"
            variant="Bold"
          />
        </View>

        <View style={{flex: 7}}>
          <Text style={NOTE_CARD.title}>{item.title}</Text>
          <Text style={NOTE_CARD.description}>{item.description}</Text>
          <Text style={NOTE_CARD.date}>{item.date}</Text>
        </View>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'flex-end'}}
          onPress={() => deleteNote(item.id)}>
          <Trash color={COLORS.red} variant="Bold" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'flex-end'}}
          onPress={() =>
            navigation.navigate(addNotes, {note: item, type: 'update'})
          }>
          <Edit color={COLORS.orange} variant="Bold" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
