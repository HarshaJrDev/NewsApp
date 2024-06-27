import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import SlidersScreen from './SlidersScreen';
import TypeOfNews from './TypeOfNews';
const App = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=47bdf9adc01f4b9c9e073e21905a23d1',
      );
      setData(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('ArticleDetails', {article: item})}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemAuthor}>{item.author}</Text>
      <Image
        style={styles.itemImage}
        source={{uri: item.urlToImage}}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
    <SlidersScreen/>
    <TypeOfNews/>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{paddingHorizontal: 16}}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    marginBottom: 12,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  itemAuthor: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  itemImage: {
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
});
