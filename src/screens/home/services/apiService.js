import axios from 'axios';

//const API_BASE_URL = 'http://192.168.0.197:4000/api/receta';
const API_BASE_URL = 'https://api-recetas-t0r2.onrender.com/api/receta';

export const fetchRecipes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/list`);
    console.log('Respuesta de la API:', response.data);

    response.data.data.forEach(recipe => {
      console.log(`Nombre: ${recipe.name}`);
      console.log(`Ingredientes: ${JSON.stringify(recipe.ingredients)}`);
      console.log(`Pasos: ${JSON.stringify(recipe.steps)}`);
      console.log(`Imagen: ${JSON.stringify(recipe.img)}`);
    });

    return response.data.data;
  } catch (error) {
    console.error('Error al obtener recetas:', error);
    return [];
  }
};

export const getRecommendations = async (ingredients) => {
  try {
    console.log('Ingredientes enviados para recomendaciones:', ingredients);

    // Enviar el body correctamente formateado con 'ingredients' como array
    const response = await axios.post(`${API_BASE_URL}/recom`, { ingredients });
    console.log('Recomendaciones:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error al obtener recomendaciones:', error);
    return [];
  }
};

