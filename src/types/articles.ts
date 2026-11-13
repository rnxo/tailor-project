export type Article =  {
  id: string;
  title: string;
  url: string;
  source: ArticleSource;
  publishedAt: string;
}

type ArticleSource = 'zenn' | 'qiita' | 'note' | 'stack-overflow' | 'github'