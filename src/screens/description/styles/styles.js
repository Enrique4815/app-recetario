import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Fondo con tono cálido y elegante
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(40),
  },
  recipeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)', // Efecto de oscurecimiento sobre la imagen
  },
  recipeTitle: {
    position: 'absolute',
    bottom: hp(3),
    fontSize: hp(4),
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  detailsContainer: {
    paddingHorizontal: wp(5),
    paddingBottom: hp(5),
  },
  description: {
    fontSize: hp(2),
    marginBottom: hp(3),
    fontStyle: 'italic',
    color: '#444',
    textAlign: 'justify',
  },
  section: {
    marginBottom: hp(3),
    padding: hp(2),
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: hp(2.7),
    fontWeight: 'bold',
    marginBottom: hp(1),
    color: '#333',
    textTransform: 'uppercase',
  },
  ingredientList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: wp(2),
  },
  ingredientChip: {
    backgroundColor: '#FFBE7B',
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    borderRadius: 20,
    marginBottom: hp(1),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  ingredientText: {
    fontSize: hp(2),
    color: '#FFF',
    fontWeight: 'bold',
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE4C4',
    padding: hp(1.5),
    borderRadius: 10,
    marginBottom: hp(1),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  stepNumber: {
    backgroundColor: '#FF914D',
    width: hp(4),
    height: hp(4),
    borderRadius: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(2),
  },
  stepNumberText: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: '#FFF',
  },
  stepText: {
    fontSize: hp(2),
    color: '#555',
    flex: 1,
  },
  fab: {
    position: 'absolute',
    bottom: hp(5),
    right: wp(5),
    backgroundColor: '#FF5E5E',
    width: hp(6),
    height: hp(6),
    borderRadius: hp(3),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },

  // Nuevos estilos añadidos
  selectedIngredient: {
    backgroundColor: 'green', // Verde para ingredientes seleccionados
  },
  unselectedIngredient: {
    backgroundColor: 'red', // Rojo para ingredientes no seleccionados
  },
});

export default styles;
