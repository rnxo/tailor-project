import data from '@/data/articles.json';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function ArticleCard() {
  return (
    <FlatList
      data={data.articles}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text className='text-blue-500 font-bold'>{item.title}</Text>
          <Text>{item.source}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: { padding: 16, borderBottomWidth: 1, borderColor: '#ddd' },
  title: { fontSize: 16, fontWeight: 'bold' },
});