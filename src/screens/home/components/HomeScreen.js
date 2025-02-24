import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Dropdown } from 'react-native-element-dropdown';
import { DataTable } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [jsonOutput, setJsonOutput] = useState({ ingredients: [] });

  const ingredients = [
    { label: 'Huevo', value: 'huevo' },
    { label: 'Chile', value: 'chile' },
    { label: 'Fijoles', value: 'frijoles' },
    { label: 'Tomate', value: 'tomate' },
    { label: 'Cebolla', value: 'cebolla' },
    { label: 'Ajo', value: 'ajo' },
    { label: 'Pechuga de pollo', value: 'pechuga_de_pollo' },
    { label: 'Arroz', value: 'arroz' },
    { label: 'Leche', value: 'leche' },
    { label: 'Nopales', value: 'nopales' },
  ];

  const recommendations = [
    {
      id: '1',
      name: 'Pizza con tortilla',
      image: require('./../../../../assets/images/pizza.png'),
      ingredients: ['Huevo', 'Tomate', 'Cebolla', 'Arroz'],
      description: 'Una deliciosa pizza con tortilla, fácil y rápida.',
      steps: [
        '1. Precalienta el horno a 180°C.',
        '2. Extiende la tortilla en una bandeja para hornear.',
        '3. Coloca los ingredientes sobre la tortilla.',
        '4. Hornea durante 10-12 minutos o hasta que se dore.',
      ]
    },
    {
      id: '2',
      name: 'Sushi con salmón',
      image: require('./../../../../assets/images/sushi.png'),
      ingredients: ['Huevo', 'Tomate', 'Leche'],
      description: 'Sushi fresco con salmón y un toque especial.',
      steps: [
        '1. Cocina el arroz para sushi según las instrucciones del paquete.',
        '2. Corta el salmón en tiras finas.',
        '3. Extiende el arroz sobre una hoja de alga nori.',
        '4. Coloca las tiras de salmón y enróllalo.',
        '5. Corta en pequeños trozos y sirve con salsa de soya.',
      ]
    }
  ];

  const addIngredientToList = () => {
    if (selectedIngredient) {
      const ingredient = ingredients.find((item) => item.value === selectedIngredient);

      if (ingredientsList.includes(ingredient.label)) {
        setAlertMessage('Este ingrediente ya fue agregado.');
      } else {
        setIngredientsList((prevList) => {
          const updatedList = [...prevList, ingredient.label];
          setJsonOutput({ ingredients: updatedList });
          setAlertMessage('');
          return updatedList;
        });
      }
    }
  };

  const removeIngredient = (ingredient) => {
    setIngredientsList((prevList) => {
      const updatedList = prevList.filter((item) => item !== ingredient);
      setJsonOutput({ ingredients: updatedList });
      return updatedList;
    });
  };

  const filterRecommendations = () => {
    return recommendations.filter((recommendation) =>
      ingredientsList.every((ingredient) =>
        recommendation.ingredients.includes(ingredient)
      )
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Haz que tu
        </Text>
        <Text style={styles.titleText}>
          estancia sea tu <Text style={styles.titleHighlightText}>casa</Text>
        </Text>
      </View>

      <View style={styles.dropdownContainer}>
        <Dropdown
          data={ingredients}
          labelField="label"
          valueField="value"
          placeholder="Selecciona un ingrediente"
          value={selectedIngredient}
          onChange={(item) => setSelectedIngredient(item.value)}
          style={styles.dropdownStyle}
        />
      </View>

      {alertMessage ? (
        <View style={styles.alertMessage}>
          <Text>{alertMessage}</Text>
        </View>
      ) : null}

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={addIngredientToList} style={styles.button}>
          <Icon name="check" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {ingredientsList.length > 0 && (
        <View style={styles.tableContainer}>
          <Text style={styles.tableTitle}>Ingredientes seleccionados:</Text>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Ingrediente</DataTable.Title>
              <DataTable.Title>Acción</DataTable.Title>
            </DataTable.Header>

            {ingredientsList.map((ingredient, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>{ingredient}</DataTable.Cell>
                <DataTable.Cell>
                  <TouchableOpacity
                    onPress={() => removeIngredient(ingredient)}
                    style={styles.removeButton}
                  >
                    <Icon name="trash" size={20} color="#fff" />
                  </TouchableOpacity>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </View>
      )}

      <View>

        <View style={styles.recommendationsTitle}>
          <Text>Recomendaciones</Text>
        </View>

        <FlatList
          horizontal
          data={filterRecommendations()}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RecipeDetail', { recipe: item })
              }
            >
              <View style={styles.recommendationCard}>
                <Image source={item.image} style={styles.recommendationImage} />
                <View style={styles.recommendationOverlay}>
                  <Text style={styles.recommendationText}>{item.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
    </View>
  );
}
