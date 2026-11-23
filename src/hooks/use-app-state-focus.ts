import { focusManager } from '@tanstack/react-query';
import { useEffect } from 'react';
import { AppState, Platform, type AppStateStatus } from 'react-native';

function onAppStateChange(status: AppStateStatus) {
  // Web はブラウザのイベントで TanStack Query が自分で検知するので、ネイティブだけつなぐ
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

// アプリがフォアグラウンドに戻ったことを TanStack Query に伝える
export function useAppStateFocus(): void {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);
    return () => subscription.remove();
  }, []);
}
