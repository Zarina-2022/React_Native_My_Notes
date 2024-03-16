import {Text, View} from 'react-native';

// import icons
import {AttachSquare, Share, MoreSquare} from 'iconsax-react-native';

//import utils
import {COLORS} from '../../theme/colors';

export default function HeaderRight() {
  return (
    <View style={{flexDirection: 'row', marginHorizontal: 10}}>
      <AttachSquare
        color={COLORS.secondary}
        variant="Outline"
        style={{marginLeft: 10}}
      />
      <Share
        color={COLORS.secondary}
        variant="Outline"
        style={{marginLeft: 10}}
      />
      <MoreSquare
        color={COLORS.secondary}
        variant="Outline"
        style={{marginLeft: 10}}
      />
    </View>
  );
}
