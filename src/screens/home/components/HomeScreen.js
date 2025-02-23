import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Dropdown } from 'react-native-element-dropdown';
import { DataTable } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importamos los íconos
import styles from '../styles/styles'; // Importa los estilos

export default function HomeScreen() {
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
    },
    {
      id: '2',
      name: 'Sushi con salmón',
      image: require('./../../../../assets/images/sushi.png'),
    },
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
          return updatedList;
        });
        setAlertMessage('');
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

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Título */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Haz que tu
        </Text>
        <Text style={styles.titleText}>
          estancia sea tu <Text style={styles.titleHighlightText}>casa</Text>
        </Text>
      </View>

      {/* Dropdown para seleccionar ingrediente */}
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

      {/* Mostrar la alerta si se seleccionó un ingrediente duplicado */}
      {alertMessage ? (
        <View style={styles.alertMessage}>
          <Text>{alertMessage}</Text>
        </View>
      ) : null}

      {/* Botón con solo el ícono de palomita */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={addIngredientToList} style={styles.button}>
          <Icon name="check" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Tabla de ingredientes solo si hay ingredientes */}
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
                  {/* Botón con ícono de papelera dentro */}
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
        {/* Recomendaciones */}
        <View style={styles.recommendationsTitle}>
          <Text>Recomendaciones</Text>
        </View>

        {/* Lista de recomendaciones */}
        <FlatList
          horizontal
          data={recommendations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.recommendationCard}>
              <Image source={item.image} style={styles.recommendationImage} />
              <View style={styles.recommendationOverlay}>
                <Text style={styles.recommendationText}>{item.name}</Text>
              </View>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
        </View>
    </View>
  );
}
