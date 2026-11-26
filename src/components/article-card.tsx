import { Pressable, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';
import type { Article } from '@/types/articles';
import { formatPublishedAt } from '@/utils/format-date';
import { openArticle } from '@/utils/open-article';

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const theme = useTheme();

  const handlePress = () => openArticle(article.url);

  return (
    // 区切り線の色はテーマから取り、ダークモードでも見えるようにする
    <Pressable 
      className="border-b p-three" 
      style={{ borderBottomColor: theme.backgroundSelected }}
      role="link"
      accessibilityLabel={article.title}
      accessibilityHint="press to open the source url"
      onPress={handlePress}>
      <ThemedText type="smallBold" numberOfLines={2}>
        {article.title}
      </ThemedText>
      <View className="mt-one flex-row gap-two">
        <ThemedText type="small" themeColor="textSecondary">
          {article.source}
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {formatPublishedAt(article.publishedAt)}
        </ThemedText>
      </View>
    </Pressable>
  );
}
