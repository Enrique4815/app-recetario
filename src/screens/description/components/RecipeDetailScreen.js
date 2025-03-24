import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const RecipeDetailScreen = ({ route }) => {
  const { recipe, selectedIngredients } = route.params;

  const images = {
    "img1.png": require("../../../../assets/images/img1.png"),
    "img2.png": require("../../../../assets/images/img2.png"),
    "img3.png": require("../../../../assets/images/img3.png"),
    "img4.png": require("../../../../assets/images/img4.png"),
    "img5.png": require("../../../../assets/images/img5.png"),
    "img6.png": require("../../../../assets/images/img6.png"),
    "img7.png": require("../../../../assets/images/img7.png"),
    "img8.png": require("../../../../assets/images/img8.png"),
    "img9.png": require("../../../../assets/images/img9.png"),
    "img10.png": require("../../../../assets/images/img10.png"),
    "img11.png": require("../../../../assets/images/img11.png"),
    "img12.png": require("../../../../assets/images/img12.png"),
    "img13.png": require("../../../../assets/images/img13.png"),
    "img14.png": require("../../../../assets/images/img14.png"),
    "img15.png": require("../../../../assets/images/img15.png"),
  };

  const recipeImage = images[recipe.img] || require("../../../../assets/images/welcome.png");

  // Función para verificar si el ingrediente está en la lista de ingredientes seleccionados
  const isIngredientSelected = (ingredientName) => {
    return selectedIngredients.includes(ingredientName);
  };

  // Clasificamos los ingredientes en seleccionados y no seleccionados
  const getClassifiedIngredients = (ingredients) => {
    const selectedIngredientsList = [];
    const unselectedIngredientsList = [];

    ingredients.forEach((ingredient) => {
      if (isIngredientSelected(ingredient.name)) {
        selectedIngredientsList.push(ingredient);
      } else {
        unselectedIngredientsList.push(ingredient);
      }
    });

    return { selectedIngredientsList, unselectedIngredientsList };
  };

  // Obtenemos los ingredientes clasificados
  const { selectedIngredientsList, unselectedIngredientsList } = getClassifiedIngredients(recipe.ingredients);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={recipeImage} style={styles.recipeImage} />
          <View style={styles.overlay} />
          <Text style={styles.recipeTitle}>{recipe.name}</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.description}>{recipe.description}</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingredientes:</Text>
            <View style={styles.ingredientList}>
              {/* Mostrar ingredientes seleccionados primero */}
              {selectedIngredientsList.map((ingredient, index) => {
                const ingredientStyle = styles.selectedIngredient;

                return (
                  <View key={index} style={[styles.ingredientChip, ingredientStyle]}>
                    <Text style={styles.ingredientText}>
                      {ingredient.name} ({ingredient.quantity} {ingredient.unit})
                    </Text>
                  </View>
                );
              })}

              {/* Luego, mostrar ingredientes no seleccionados */}
              {unselectedIngredientsList.map((ingredient, index) => {
                const ingredientStyle = styles.unselectedIngredient;

                return (
                  <View key={index} style={[styles.ingredientChip, ingredientStyle]}>
                    <Text style={styles.ingredientText}>
                      {ingredient.name} ({ingredient.quantity} {ingredient.unit})
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pasos a seguir:</Text>
            {recipe.steps.map((step, index) => (
              <View key={index} style={styles.stepContainer}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>{index + 1}</Text>
                </View>
                <Text style={styles.stepText}>{step}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RecipeDetailScreen;
