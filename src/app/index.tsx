import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getArticles } from '@/api/articles';
import ArticleCard from '@/components/article-card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset } from '@/constants/theme';
import type { Article } from '@/types/articles';
import { sortByNewest } from '@/utils/sort-articles';

export default function HomeScreen() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // 取得が終わる前に画面が閉じられたら、state を更新しない
    let isCancelled = false;

    getArticles()
      .then((fetched) => {
        if (isCancelled) return;
        setArticles(sortByNewest(fetched));
      })
      .catch((e: unknown) => {
        if (isCancelled) return;
        setError(e instanceof Error ? e : new Error(String(e)));
      })
      .finally(() => {
        if (isCancelled) return;
        setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <ThemedView className="flex-1">
      <SafeAreaView className="flex-1" edges={['top']}>
        {isLoading ? (
          <ThemedView className="flex-1 items-center justify-center">
            <ActivityIndicator />
          </ThemedView>
        ) : error ? (
          <ThemedView className="flex-1 items-center justify-center">
            <ThemedText>記事を読み込めませんでした</ThemedText>
          </ThemedView>
        ) : (
          <FlatList
            data={articles}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ArticleCard article={item} />}
            contentContainerStyle={{ paddingBottom: BottomTabInset }}
            ListEmptyComponent={<ThemedText className="p-three">記事がありません</ThemedText>}
          />
        )}
      </SafeAreaView>
    </ThemedView>
  );
}
