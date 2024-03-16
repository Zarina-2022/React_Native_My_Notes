import {View, Text, SafeAreaView} from 'react-native';
import {DIMENSIONS} from '../utils/constants';
import {COLORS} from '../theme/colors';
import {SCREENS} from '../utils/routes';

// icon imports
import {HambergerMenu, SearchNormal1, More} from 'iconsax-react-native';

//import styles
import {HEADER} from '../styles/style';

const Header = () => {
  const {myNotes} = SCREENS;
  return (
    <SafeAreaView>
      <View style={HEADER.container}>
        <View style={HEADER.headerTop}>
          <Text style={HEADER.headerText}>{SCREENS.myNotes}</Text>
        </View>

        <View style={HEADER.headerBottom}>
          <View style={HEADER.headerBottomLeft}>
            <Text>
              <HambergerMenu size="24" color={COLORS.secondary} />
            </Text>
          </View>
          <View style={HEADER.headerBottomRight}>
            <Text>
              <SearchNormal1 size="24" color={COLORS.secondary} />
            </Text>
            <Text>
              <More size="24" color={COLORS.secondary} />
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
