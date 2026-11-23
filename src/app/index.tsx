import { ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ArticleCard from '@/components/article-card';
import ErrorView from '@/components/error-view';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset } from '@/constants/theme';
import { useArticlesQuery } from '@/hooks/use-articles-query';
import { useState } from 'react';

export default function HomeScreen() {
  const { data, isPending, isError, refetch } = useArticlesQuery();
  const [ isRefreshing, setIsRefreshing ] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    refetch().finally(() => setIsRefreshing(false));
  };


  return (
    <ThemedView className="flex-1">
      <SafeAreaView className="flex-1" edges={['top']}>
        {isPending ? (
          <ThemedView className="flex-1 items-center justify-center">
            <ActivityIndicator />
          </ThemedView>
        ) : isError ? (
          <ErrorView text="Failed to Found Article. Pull to Refresh"/>
        ) : (
          <FlatList
            data={data} //data = articles
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ArticleCard article={item} />}
            contentContainerStyle={{ paddingBottom: BottomTabInset }}
            ListEmptyComponent={<ErrorView text="Failed to Found Article. Pull to Refresh"/>}
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
          />
        )}
      </SafeAreaView>
    </ThemedView>
  );
}
