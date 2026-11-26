/*
  記事の元ページをアプリ内ブラウザで開く。
  開けたら true、URL が不正・開けなかったときは false を返す。例外は外に出さない。

  注意: iOS ではユーザーがブラウザを閉じるまで Promise が解決しない。
  Android は開いた時点で解決する（閉じるまで待たない）。
 */

import { openBrowserAsync, WebBrowserPresentationStyle } from 'expo-web-browser';

export async function openArticle(sourceUrl: string): Promise<boolean> {
  try {
    await openBrowserAsync(sourceUrl, {
      presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
    });
    return true;
  } catch {
    console.warn('[openArticle] 記事を開けませんでした', sourceUrl);
    return false;
  }
}
