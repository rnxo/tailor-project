import { Article } from '@/types/articles';
import { Text, View } from 'react-native';

type ArticleCardProps = {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <View className="border-b border-[#ddd] p-[16px]">
      <Text className='text-blue-500 font-bold'>{article.title}</Text>
      <Text>{article.source}</Text>
      <Text>{article.publishedAt}</Text>
    </View>
  )
}

