import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatListSlider} from 'react-native-flatlist-slider';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
const SlidersScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=47bdf9adc01f4b9c9e073e21905a23d1',
      );
      // Map the response to the format expected by FlatListSlider
      const formattedData = response.data.articles.map(article => ({
        image: article.urlToImage,
        title: article.title,
        desc: article.description,
        content: article.content,
      }));
      setData(formattedData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const renderCustomItem = ({item}) => (
    <TouchableOpacity
      style={styles.customItemContainer}
      onPress={() => navigation.navigate('ArticleDetails', {articles})}>
      <Image source={{uri: item.image}} style={styles.imageStyle} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }

  if (data.length === 0) {
    return (
      <View style={styles.noDataContainer}>
        <Text>No data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.sliderContainer}>
      <FlatListSlider
        data={data}
        height={150}
        timer={5000}
        contentContainerStyle={styles.sliderContentContainer}
        indicatorContainerStyle={styles.sliderIndicatorContainer}
        indicatorActiveWidth={30}
        animation
        indicator
        renderItem={renderCustomItem} // Correctly pass the custom render function
      />
    </View>
  );
};

export default SlidersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    borderTopEndRadius: 20,
  },
  sliderContentContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  sliderIndicatorContainer: {
    position: 'absolute',
    bottom: 20,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  customItemContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    borderRadius: 20,
    overflow: 'hidden',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
  titleStyle: {
    color: '#fff',
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
