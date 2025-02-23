import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    marginHorizontal: 16,
    marginTop: '10%',
    marginBottom: hp(2),
  },
  titleText: {
    fontSize: hp(4),
    fontWeight: 'bold',
    color: '#4b5563',
  },
  titleHighlightText: {
    color: '#f59e0b',
  },
  dropdownContainer: {
    marginHorizontal: 16,
    marginBottom: hp(2),
  },
  dropdownStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
  },
  alertMessage: {
    marginHorizontal: 16,
    marginBottom: hp(2),
    color: 'red',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginHorizontal: 16,
    marginBottom: hp(2),
  },
  button: {
    padding: wp(3),
    backgroundColor: '#f59e0b',
    borderRadius: 50,
    alignItems: 'center',
  },
  tableContainer: {
    marginHorizontal: 16,
    marginTop: hp(2),
  },
  tableTitle: {
    fontSize: hp(3),
    fontWeight: 'bold',
  },
  removeButton: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
    backgroundColor: '#ff4d4d',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recommendationsTitle: {
    marginHorizontal: 16,
    marginTop: '10%',
    marginBottom: hp(2),
    fontSize: hp(4),
    fontWeight: 'bold',
    color: '#4b5563',
  },
  recommendationCard: {
    marginHorizontal: 8,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f3f3f3',
    height: '100%'
  },
  recommendationImage: {
    width: wp(50),
    height: hp(30),
    borderRadius: 10,
  },
  recommendationOverlay: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '100%',
    padding: 5,
  },
  recommendationText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
