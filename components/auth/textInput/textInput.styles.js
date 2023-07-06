import { StyleSheet } from 'react-native';
import { COLORS, FONT, MARGIN, PADDING, SIZES } from '../../../constants';
import { color } from 'react-native-reanimated';

export const styles = StyleSheet.create({
  container: {
    marginTop: MARGIN.large,
  },
  input: {
    height: 40,
    borderColor: COLORS.white,
    borderBottomWidth: 1,
    paddingLeft: 10,
    color: COLORS.white,
    fontFamily: FONT.regular,
    letterSpacing: 0.5,
    fontSize: SIZES.medium,
  },
  label: {
    fontFamily: FONT.regular,
    letterSpacing: 0.5,
  },
});
