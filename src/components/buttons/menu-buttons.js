import {View} from 'react-native';
import {MENU_BTN} from '../../styles/style';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {COLORS} from '../../theme/colors';

// import icons
import {
  TextBold,
  TextItalic,
  TextUnderline,
  TextalignCenter,
  TextalignLeft,
  TextalignRight,
} from 'iconsax-react-native';

export default function MenuButtons({
  onBold,
  onItalic,
  onUnderline,
  onAlignLeft,
  onAlignCenter,
  onAlignRight,
}) {
  return (
    <View style={MENU_BTN.container}>
      <>
        <TouchableOpacity onPress={onBold}>
          <TextBold size="30" color={COLORS.dark} variant="Outline" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onItalic}>
          <TextItalic size="30" color={COLORS.secondary} variant="Outline" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onUnderline}>
          <TextUnderline size="30" color={COLORS.secondary} variant="Outline" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onAlignLeft}>
          <TextalignLeft size="30" color={COLORS.secondary} variant="Outline" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onAlignCenter}>
          <TextalignCenter
            size="30"
            color={COLORS.secondary}
            variant="Outline"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onAlignRight}>
          <TextalignRight
            size="30"
            color={COLORS.secondary}
            variant="Outline"
          />
        </TouchableOpacity>
      </>
    </View>
  );
}
