import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';  // Importa los estilos
import Animated from 'react-native-reanimated';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function WelcomeScreen() {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);
  const navigation = useNavigation();

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;

    setTimeout(() => {
      ring1padding.value = withSpring(ring1padding.value + hp(5));
    }, 100);

    setTimeout(() => {
      ring2padding.value = withSpring(ring2padding.value + hp(5.5));
    }, 300);

    setTimeout(() => {
      navigation.navigate('Home');
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Logo image with rings */}
      <Animated.View style={[styles.logoWrapper1, { padding: ring1padding }]}>
        <Animated.View style={[styles.logoWrapper2, { padding: ring2padding }]}>
          <Image 
            source={require('../../../../assets/images/welcome.png')}
            style={styles.logoImage}
          />
        </Animated.View>
      </Animated.View>

      {/* Title and punchline */}
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>
          Comidas Faciles
        </Text>
        <Text style={styles.subtitleText}>
          La comida siempre es la correcta
        </Text>
      </View>
    </View>
  );
}