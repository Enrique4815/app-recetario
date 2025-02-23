import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { CachedImage } from '../../../helpers/image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ChevronLeftIcon, FireIcon, Square3Stack3DIcon, UsersIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { ClockIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Loading from '../../../components/loading';
import YoutubeIframe from 'react-native-youtube-iframe';

export default function DetalleReceta(props) {
  let item = props.route.params;
  const [esFavorito, setEsFavorito] = useState(false);
  const navigation = useNavigation();
  const [comida, setComida] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    obtenerDatosComida(item.idMeal);
  }, []);

  const obtenerDatosComida = async (id) => {
    try {
      const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      console.log('Datos de la comida:', response.data);
      if (response && response.data) {
        setComida(response.data.meals[0]);
        setCargando(false);
      }
    } catch (err) {
      console.log('Error:', err.message);
    }
  };

  const obtenerIngredientes = (comida) => {
    if (!comida) return [];
    let indices = [];
    for (let i = 1; i <= 20; i++) {
        if (comida['strIngredient' + i]) {
            indices.push(i);
        }
    }
    return indices;
  };

  return (
    <ScrollView className="bg-white flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
      <StatusBar style="light" />

      {/* Imagen de la receta */}
      <View className="flex-row justify-center mt-10">
        <CachedImage uri={item.strMealThumb} style={{ width: wp(98), height: hp(50), borderRadius: 30 }} />
      </View>

      {cargando ? (
        <Loading size="large" className="mt-16" />
      ) : (
        <View className="px-4 flex justify-between space-y-4 pt-8">
          {/* Instrucciones */}
          <View className="space-y-4">
            <Text style={{ fontSize: hp(2.5) }} className="font-bold flex-1 text-neutral-700">Instrucciones</Text>
            <Text style={{ fontSize: hp(1.6) }} className="text-neutral-700">{comida?.strInstructions}</Text>
          </View>

          {/* Video de la receta */}
          {comida.strYoutube && (
            <View className="space-y-4">
              <Text style={{ fontSize: hp(2.5) }} className="font-bold flex-1 text-neutral-700">Video de la receta</Text>
              <YoutubeIframe height={hp(25)} videoId={comida.strYoutube.split("v=")[1]} />
            </View>
          )}

          {/* Ingredientes */}
          <View className="space-y-4 px-5">
            <Text style={{ fontSize: hp(2.5), marginBottom: hp(1) }} className="font-bold text-neutral-700">Ingredientes</Text>
            <View className="space-y-3">
              {obtenerIngredientes(comida).map(i => (
                <View key={i} className="flex-row items-center bg-gray-100 px-4 py-3 rounded-lg shadow-sm">
                  <View style={{ width: hp(3), height: hp(3), backgroundColor: '#fbbf24', borderRadius: 50, alignItems: 'center', justifyContent: 'center', marginRight: wp(3) }}>
                    <Text style={{ fontSize: hp(1.8), fontWeight: 'bold', color: '#fff' }}>🍽️</Text>
                  </View>
                  <View className="flex-row justify-between flex-1">
                    <Text style={{ fontSize: hp(2), fontWeight: 'bold', color: 'black', minWidth: wp(20) }}>{comida['strMeasure' + i]}</Text>
                    <Text style={{ fontSize: hp(2), fontWeight: '500', color: '#374151', flexShrink: 1, textTransform: 'capitalize' }}>{comida['strIngredient' + i]}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
