import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const TypeOfNews = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigation = useNavigation();

  const categories = ['Tech', 'Business', 'Domains', 'Tesla', 'Apple'];

  const handlePress = (category) => {
    setActiveCategory(category);
    switch (category) {
      case 'Tech':
        navigation.navigate('TechNews'); // Replace with your actual screen name
        break;
      case 'Business':
        navigation.navigate('BusinessNews'); // Replace with your actual screen name
        break;
      case 'Domains':
        navigation.navigate('DomainsNews'); // Replace with your actual screen name
        break;
      case 'Tesla':
        navigation.navigate('TeslaNews'); // Replace with your actual screen name
        break;
      case 'Apple':
        navigation.navigate('AppleNews'); // Replace with your actual screen name
        break;
      default:
        break;
    }
  };

  return (
    <ScrollView
      horizontal={true}
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            activeCategory === category && styles.activeButton,
          ]}
          onPress={() => handlePress(category)}
        >
          <Text
            style={[
              styles.buttonText,
              activeCategory === category && styles.activeButtonText,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default TypeOfNews;

const styles = StyleSheet.create({
  scrollView: {
    marginVertical: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 50, // Ensure enough height to position the text at the bottom center
  },
  activeButton: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  activeButtonText: {
    color: '#fff',
  },
});
