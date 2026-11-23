import { getArticles } from "@/api/articles";
import { Article } from "@/types/articles";
import { sortByNewest } from "@/utils/sort-articles";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const articleKeys = {
  all: ['articles'] as const,
};

export function useArticlesQuery(): UseQueryResult<Article[], Error> {
  return useQuery({
    queryKey: articleKeys.all,
    queryFn: async () => sortByNewest(await getArticles())
  })
}