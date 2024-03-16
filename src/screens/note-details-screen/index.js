import React, {useContext, useEffect, useState} from 'react';

import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

// import styles
import {ADD_NOTES, GENERAL_STYLE} from '../../styles/style';

//import components
import MenuButtons from '../../components/buttons/menu-buttons';
import MyContext from '../../context';

export default function NoteDetails({route}) {
  const [selectStyle, setSelectStyle] = useState(styles.default);
  const {note} = route?.params;
  const {updatedNote} = useContext(MyContext);

  useEffect(() => {
    updatedNote(note.id, note);
  }, []);

  // Functions to handle editing actions
  const handleBold = style => {
    // Implement bold editing logic here
    console.log('Bold button pressed');
    if ((style = 'bold')) {
      setSelectStyle(styles.bold);
    }
  };

  const handleItalic = style => {
    // Implement italic editing logic here
    console.log('Italic button pressed');
    if ((style = 'italic')) {
      setSelectStyle(styles.italic);
    }
  };

  const handleUnderline = style => {
    // Implement underline editing logic here
    console.log('Underline button pressed');
    if ((style = 'underline')) {
      setSelectStyle(styles.underline);
    }
  };

  const handleAlignLeft = style => {
    // Implement align left editing logic here
    console.log('Align left button pressed');
    if ((style = 'left')) {
      setSelectStyle(styles.left);
    }
  };

  const handleAlignCenter = style => {
    // Implement align center editing logic here
    console.log('Align center button pressed');
    if ((style = 'center')) {
      setSelectStyle(styles.center);
    }
  };

  const handleAlignRight = style => {
    // Implement align right editing logic here
    console.log('Align right button pressed');
    if ((style = 'right')) {
      setSelectStyle(styles.right);
    }
  };

  return (
    <SafeAreaView style={GENERAL_STYLE.container}>
      <View style={GENERAL_STYLE.container}>
        <View>
          <MenuButtons
            onBold={handleBold}
            onItalic={handleItalic}
            onUnderline={handleUnderline}
            onAlignLeft={handleAlignLeft}
            onAlignCenter={handleAlignCenter}
            onAlignRight={handleAlignRight}
          />
        </View>

        <View style={ADD_NOTES.container}>
          <View
            style={{backgroundColor: 'white', padding: 10, gap: 35, flex: 1}}>
            <View>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>Title</Text>
              <Text style={selectStyle}>{note.title}</Text>
            </View>
            <View>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                Description
              </Text>
              <Text style={selectStyle}>{note.description}</Text>
            </View>
            <View>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>Date</Text>
              <Text style={selectStyle}>{note.date}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  default: {},
});
