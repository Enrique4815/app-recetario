import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Dropdown } from 'react-native-element-dropdown';
import { DataTable } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles';
import { fetchRecipes, getRecommendations } from '../services/apiService';

export default function HomeScreen({ navigation }) {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const loadRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };
    loadRecipes();
  }, []);

  useEffect(() => {
    const fetchFilteredRecipes = async () => {
      if (ingredientsList.length > 0) {
        const data = await getRecommendations(ingredientsList);
        console.log('Recomendaciones obtenidas desde el backend:', data); // Log para verificar lo que recibimos
        setRecommendations(data.data || []);  // Asegúrate de que 'data' esté presente en la respuesta
      } else {
        setRecommendations(recipes);
      }
    };
    fetchFilteredRecipes();
  }, [ingredientsList, recipes]);

  const ingredients = [
    { label: 'Huevo', value: 'huevo' },
    { label: 'Chile', value: 'chile' },
    { label: 'Frijoles', value: 'frijoles' },
    { label: 'Tomate', value: 'tomate' },
    { label: 'Cebolla', value: 'cebolla' },
    { label: 'Ajo', value: 'ajo' },
    { label: 'Pechuga de pollo', value: 'pechuga_de_pollo' },
    { label: 'Arroz', value: 'arroz' },
    { label: 'Leche', value: 'leche' },
    { label: 'Nopales', value: 'nopales' },
  ];

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

  const addIngredientToList = useCallback(() => {
    if (selectedIngredient) {
      const ingredient = ingredients.find((item) => item.value === selectedIngredient);
      if (ingredientsList.includes(ingredient.label)) {
        setAlertMessage('Este ingrediente ya fue agregado.');
      } else {
        setIngredientsList((prevList) => [...prevList, ingredient.label]);
        setAlertMessage('');
      }
    }
  }, [selectedIngredient, ingredientsList]);

  const removeIngredient = useCallback((ingredient) => {
    setIngredientsList((prevList) => prevList.filter((item) => item !== ingredient));
  }, []);

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={styles.container}>
        <StatusBar style="dark" />

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Haz que tu estancia sea tu <Text style={styles.titleHighlightText}>casa</Text>
          </Text>
        </View>

        <View style={styles.dropdownRowContainer}>
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

          {/* Botón para agregar ingrediente */}
          <TouchableOpacity onPress={addIngredientToList} style={styles.checkButton}>
            <Icon name="check" size={30} color="#fff" />
          </TouchableOpacity>
        </View>


        {alertMessage ? (
          <View style={styles.alertMessage}>
            <Text style={{ color: 'red', fontWeight: 'bold', }}>{alertMessage}</Text>
          </View>
        ) : null}

        {ingredientsList.length > 0 && (
          <View style={styles.tableContainer}>
            <Text style={styles.tableTitle}>Ingredientes seleccionados:</Text>
            <DataTable style={styles.dataTable}>
              <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={styles.tableHeaderCell}>Ingrediente</DataTable.Title>
                <DataTable.Title style={styles.tableHeaderCell}>Acción</DataTable.Title>
              </DataTable.Header>

              {ingredientsList.map((ingredient, index) => (
                <DataTable.Row key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                  <DataTable.Cell style={styles.tableCell}>{ingredient}</DataTable.Cell>
                  <DataTable.Cell style={styles.tableCell}>
                    <TouchableOpacity onPress={() => removeIngredient(ingredient)} style={styles.removeButton}>
                      <Text style={{ color: '#fff', fontWeight: 'bold' }}>Eliminar</Text>
                    </TouchableOpacity>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </View>
        )}

        <View style={styles.recommendationsTitle}>
          <Text>Recomendaciones</Text>
        </View>

        {recommendations.length === 0 ? (
          <Text>No hay recetas para los ingredientes seleccionados.</Text>
        ) : (
          <FlatList
            horizontal
            data={recommendations}
            keyExtractor={(item, index) => item._id || index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}>
                <View style={styles.recommendationCard}>
                  <Image
                    source={images[item.img] || require("../../../../assets/images/welcome.png")}
                    style={styles.recommendationImage}
                  />
                  <View style={styles.recommendationOverlay}>
                    <Text style={styles.recommendationText}>{item.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          />
        )}
      </View>
    </ScrollView>
  );
}
