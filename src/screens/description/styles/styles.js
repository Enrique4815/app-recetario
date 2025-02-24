import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  recipeImage: {
    width: '100%',
    height: 300,
    marginBottom: 16,
    resizeMode: 'cover',
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    fontStyle: 'italic',
  },
  ingredientsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  ingredientText: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 6,
  },
  stepsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  stepText: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 8,
  },
});

export default styles;