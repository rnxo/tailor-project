import data from '@/data/articles.json';
import { Article } from '@/types/articles';

//TODO: change the return value JSON file -> response of Hono API
export const getArticles = async (): Promise<Article[]> => {
  return data.articles as Article[];
};
