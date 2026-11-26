import { openBrowserAsync, WebBrowserPresentationStyle } from 'expo-web-browser';
export async function openArticle(sourceUrl: string): Promise<boolean> {
  try {
    // external-link.tsx に合わせて AUTOMATIC にする（指定しないと OVER_FULL_SCREEN になる）
    await openBrowserAsync(sourceUrl, {
      presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
    });
    return true;
  } catch {
    console.warn('[openArticle] 記事を開けませんでした', sourceUrl);
    return false;
  }
}
