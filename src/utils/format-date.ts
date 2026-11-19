/**
 * ISO 8601 の日時文字列を、端末のタイムゾーンで "YYYY/MM/DD HH:mm" 形式に変換する。
 * 日時として解釈できない値のときは空文字を返す。
 */
export function formatPublishedAt(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';

  const pad = (n: number) => String(n).padStart(2, '0');

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); // getMonth() は 0 始まり
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${year}/${month}/${day} ${hours}:${minutes}`;
}
