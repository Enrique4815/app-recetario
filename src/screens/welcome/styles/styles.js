import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f59e0b',
  },
  logoWrapper1: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 9999,
  },
  logoWrapper2: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 9999,
  },
  logoImage: {
    width: hp(20),
    height: hp(20),
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  titleText: {
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 4,
    fontSize: 48,
  },
  subtitleText: {
    fontWeight: '500',
    color: 'white',
    letterSpacing: 4,
    fontSize: 18,
  },
});

export default styles;
