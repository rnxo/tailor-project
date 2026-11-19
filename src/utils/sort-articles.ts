import type { Article } from '@/types/articles';

/**
 * 記事を publishedAt の新しい順に並べた新しい配列を返す。
 * 引数の配列は変更しない。日時として解釈できない記事は末尾に回す。
 */
export function sortByNewest(articles: Article[]): Article[] {
  return [...articles].sort((a, b) => {
    const timeA = Date.parse(a.publishedAt);
    const timeB = Date.parse(b.publishedAt);
    const isInvalidA = Number.isNaN(timeA);
    const isInvalidB = Number.isNaN(timeB);

    if (isInvalidA && isInvalidB) return 0;
    if (isInvalidA) return 1;
    if (isInvalidB) return -1;
    return timeB - timeA;
  });
}
