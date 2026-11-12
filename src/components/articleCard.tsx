import data from '@/data/articles.json';
import { FlatList, Text, View } from 'react-native';

export default function ArticleCard() {
  return (
    <FlatList
      data={data.articles}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View className="border-b border-[#ddd] p-[16px]">
          <Text className='text-blue-500 font-bold'>{item.title}</Text>
          <Text>{item.source}</Text>
        </View>
      )}
    />
  );
}
