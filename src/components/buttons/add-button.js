import {Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../theme/colors';
import React from 'react';

// icon imports
import {AddCircle} from 'iconsax-react-native';
import {ADD_BTN} from '../../styles/style';

// import styles

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity style={ADD_BTN.btn}>
      <Text onPress={onPress}>
        <AddCircle color={COLORS.primary} variant="Bold" size="60" />
      </Text>
    </TouchableOpacity>
  );
};

export default AddButton;
