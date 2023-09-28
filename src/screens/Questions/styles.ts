import {Platform, StyleSheet, Dimensions} from 'react-native';
import theme from '../../styles/theme';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  styledView: {
    width: width,
    alignItems: 'center',
    paddingLeft: theme.spacing.regular,
    paddingRight: theme.spacing.regular,
    paddingTop: theme.spacing.small,
    paddingBottom: theme.spacing.small,
    backgroundColor: theme.colors.secondary,
    marginTop: 100,
    borderTopLeftRadius: theme.borderRadius.large,
    borderTopRightRadius: theme.borderRadius.large,
  },
  button: {
    width: '90%',
    backgroundColor: theme.colors.button,
    paddingLeft: theme.spacing.regular,
    paddingRight: theme.spacing.regular,
    paddingTop: theme.spacing.small,
    paddingBottom: theme.spacing.small,
    borderRadius: theme.borderRadius.large,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 70,
  },
  btnText: {
    color: theme.colors.white,
    textTransform: 'uppercase',
    fontWeight: '800',
  },
  text: {
    fontSize: 18,
    color: theme.colors.white,
    textAlign: 'center',
  },
  row: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.small,
  },
  title: {
    fontSize: Platform.OS === 'ios' ? '2%' : '3%',
    textAlign: 'center',
    marginBottom: theme.spacing.small,
  },
  instructionText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.small,
    marginTop: theme.spacing.large,
  },
  englishSentence: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.large,
    marginTop: theme.spacing.large,
  },
  germanSentence: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.large,
    marginTop: theme.spacing.large,
  },
  optionsContainer: {
    flexDirection: 'row',
    gap: theme.spacing.small,
    width: width / 2,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: theme.spacing.large,
  },
  option: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 15,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: 'black',
  },
  optionText: {
    color: theme.colors.test2,
  },
  bottomStyledView: {
    width: width,
    height: height / 4,
    alignItems: 'center',
    paddingLeft: theme.spacing.regular,
    paddingRight: theme.spacing.regular,
    paddingTop: theme.spacing.small,
    paddingBottom: theme.spacing.small,
    backgroundColor: theme.colors.bottomSheet,
    marginTop: 100,
    borderTopLeftRadius: theme.borderRadius.large,
    borderTopRightRadius: theme.borderRadius.large,
    position: 'absolute',
    bottom: 0,
  },
  bottomText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.large,
    fontWeight: '600',
    textAlign: 'left',
    left: 0,
  },
  background: {
    backgroundColor: theme.colors.white,
  },
  bottomsheetText: {
    color: theme.colors.accent,
    textTransform: 'uppercase',
    fontWeight: '800',
  },
  bottomSheetMsg: {
    width: width / 1.1,
  },
  overlay: {
    width: width,
    backgroundColor: 'rgba(25, 27, 68, 0.55)',
    height: height,
    position: 'absolute',
    bottom: 0,
  },
});
