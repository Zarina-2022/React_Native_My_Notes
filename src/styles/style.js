import {StyleSheet} from 'react-native';
import {COLORS} from '../theme/colors';

// utils import
import {DIMENSIONS} from '../utils/constants';

export const GENERAL_STYLE = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    padding: 10,
  },
});

export const HEADER = StyleSheet.create({
  container: {
    minHeight: DIMENSIONS.screenHeight * 0.2,
    padding: 10,
  },
  headerTop: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 35,
    color: COLORS.secondary,
  },
  headerBottom: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
  },
  headerBottomLeft: {
    flex: 1,
    padding: 5,
  },
  headerBottomRight: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'flex-end',
    gap: 10,
  },
});

export const ADD_BTN = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: DIMENSIONS.screenWidth * 0.2,
    height: DIMENSIONS.screenHeight * 0.09,
    borderRadius: 50,
  },
});

export const NOTE_CARD = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    padding: 10,
    margin: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  description: {
    fontSize: 14,
    color: COLORS.lightDark,
    marginVertical: 5,
  },
  date: {
    fontSize: 14,
    color: COLORS.gray,
    marginVertical: 5,
  },
});

export const SAVE_BTN = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  title: {
    color: COLORS.white,
    fontWeight: 'bold',
    paddingVertical: 15,
    fontSize: 16,
  },
});

export const MENU_BTN = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    backgroundColor: COLORS.lightSecondary,
    padding: 5,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export const ADD_NOTES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkWhite,
    marginVertical: 10,
    borderRadius: 5,
  },
  input: {
    margin: 12,
    padding: 10,
    backgroundColor: COLORS.white,
    height: 50,
  },
  text: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  error: {
    color: COLORS.red,
    textAlign: 'center',
  },
});
