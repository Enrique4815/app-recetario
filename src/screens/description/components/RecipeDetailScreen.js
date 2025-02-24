import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import styles from '../styles/styles';


const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={recipe.image} style={styles.recipeImage} />
      
      <View style={{ padding: 16}}>
      <Text style={styles.recipeTitle}>{recipe.name}</Text>
      <Text style={styles.description}>{recipe.description}</Text>

      <Text style={styles.ingredientsTitle}>Ingredientes:</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredientText}>- {ingredient}</Text>
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
