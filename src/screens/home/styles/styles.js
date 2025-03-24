import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: wp(4),
  },
  titleContainer: {
    marginBottom: hp(3),
    paddingHorizontal: wp(4),
  },
  titleText: {
    fontSize: hp(4.5),
    fontWeight: 'bold',
    color: '#4b5563',
  },
  titleHighlightText: {
    color: '#f59e0b',
  },
  dropdownRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Esto hace que haya espacio entre el dropdown y el botón
    marginBottom: hp(2),
  },

  // Contenedor para el dropdown (sin cambios)
  dropdownContainer: {
    flex: 1, // Esto asegura que el dropdown ocupe el espacio restante
    marginRight: wp(2), // Un pequeño margen a la derecha para separar el botón
  },

  // Botón con ancho ajustado y menos espacio
  checkButton: {
    width: wp(12), // Ancho del botón ajustado
    height: wp(12), // Altura igual para que el botón sea circular
    backgroundColor: '#f59e0b',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  dropdownStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
  },
  alertMessage: {
    marginBottom: hp(2),  
    alignItems: 'center'
  },
  buttonContainer: {
    marginBottom: hp(3),
  },
  button: {
    padding: wp(4),
    backgroundColor: '#f59e0b',
    borderRadius: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  tableContainer: {
    marginTop: hp(2),
  },
  tableTitle: {
    fontSize: hp(3.5),
    fontWeight: 'bold',
    marginBottom: hp(2),
  },
  dataTable: {
    marginTop: hp(2),
    marginBottom: hp(2),
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeader: {
    backgroundColor: '#f3f3f3',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    paddingVertical: hp(1.5),
  },
  tableCell: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    textAlign: 'center',
  },
  oddRow: {
    backgroundColor: '#ffffff',
  },
  removeButton: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(3),
    backgroundColor: '#ff4d4d',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recommendationsTitle: {
    fontSize: hp(4),
    fontWeight: 'bold',
    marginBottom: hp(2),
    color: '#4b5563',
  },
  recommendationCard: {
    marginHorizontal: wp(3),
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#f3f3f3',
    height: hp(35),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  recommendationImage: {
    width: wp(80),
    height: '80%',
    borderRadius: 10,
  },
  recommendationOverlay: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '100%',
    paddingVertical: hp(1),
  },
  recommendationText: {
    color: 'white',
    textAlign: 'center',
    fontSize: hp(2.2),
    fontWeight: 'bold',
  },
});

export default styles;
