import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

//import styles
import {SAVE_BTN} from '../../styles/style';

export default function SaveButton({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={SAVE_BTN.btn}>
      <Text style={SAVE_BTN.title}>{title}</Text>
    </TouchableOpacity>
  );
}
