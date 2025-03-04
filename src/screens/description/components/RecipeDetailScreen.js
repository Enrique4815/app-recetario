import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import styles from '../styles/styles';

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params;

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

  // Mapeo de la imagen de la receta usando el nombre de la imagen desde el objeto 'recipe'
  const recipeImage = images[recipe.img] || require("../../../../assets/images/welcome.png");

  return (
    <ScrollView style={styles.container}>
      {/* Imagen del platillo */}
      <Image source={recipeImage} style={styles.recipeImage} />

      <View style={{ padding: 16 }}>
        <Text style={styles.recipeTitle}>{recipe.name}</Text>
        <Text style={styles.description}>{recipe.description}</Text>

        <Text style={styles.ingredientsTitle}>Ingredientes:</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <View key={index} style={styles.ingredientContainer}>
            <Text style={styles.ingredientText}>
              - {ingredient.name} ({ingredient.quantity} {ingredient.unit})
            </Text>
          </View>
        ))}

        <Text style={styles.stepsTitle}>Pasos a seguir:</Text>
        {recipe.steps.map((step, index) => (
          <Text key={index} style={styles.stepText}>{step}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default RecipeDetailScreen;
