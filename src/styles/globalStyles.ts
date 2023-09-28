import {StyleSheet} from 'react-native';
import theme from './theme';

export const styles = StyleSheet.create({
  styledView: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',
    paddingLeft: theme.spacing.regular,
    paddingRight: theme.spacing.regular,
    paddingTop: theme.spacing.small,
    paddingBottom: theme.spacing.small,
    backgroundColor: 'teal',
  },
  button: {
    width: '50%',
    backgroundColor: theme.colors.red,
    paddingLeft: theme.spacing.regular,
    paddingRight: theme.spacing.regular,
    paddingTop: theme.spacing.small,
    paddingBottom: theme.spacing.small,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: theme.fontSizes.large,
    color: theme.colors.white,
    textAlign: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'teal',
  },
  white: {
    color: 'white',
  },
});
