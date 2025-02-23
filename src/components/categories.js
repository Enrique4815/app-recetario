import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';  
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { CachedImage } from '../helpers/image';

export default function Categories({ categories, activeCategory, handleChangeCategory }) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, alignItems: 'center' }}
      >
        {
        categories.map((cat, index) => {
          let isActive = cat.strCategory === activeCategory;
          let activeButtonClass = isActive ? 'bg-amber-400' : 'bg-black/10';
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleChangeCategory(cat.strCategory)}
              style={{ alignItems: 'center', marginHorizontal: wp(2) }}
            >
              <View style={{
                borderRadius: 50,
                padding: 6,
                backgroundColor: isActive ? 'rgba(255, 193, 7, 0.5)' : 'rgba(0, 0, 0, 0.05)',
                alignItems: 'center',
                justifyContent: 'center',
                width: hp(8),
                height: hp(8),
              }}>
                <CachedImage
                  uri={cat.strCategoryThumb}
                  style={{ width: hp(6), height: hp(6), borderRadius: 50 }}
                />
              </View>
              <Text className="text-neutral-600" style={{ fontSize: hp(1.6), marginTop: hp(0.5) }}>
                {cat.strCategory}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}
