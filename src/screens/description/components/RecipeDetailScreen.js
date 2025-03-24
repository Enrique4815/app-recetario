import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
  const recipeImage = images[recipe.img] || require("../../../../assets/images/welcome.png");

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
              {recipe.ingredients.map((ingredient, index) => (
                <View key={index} style={styles.ingredientChip}>
                  <Text style={styles.ingredientText}>
                    {ingredient.name} ({ingredient.quantity} {ingredient.unit})
                  </Text>
                </View>
              ))}
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
