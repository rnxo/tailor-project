import { version } from 'expo/package.json';
import { Image } from 'expo-image';
import { useColorScheme, StyleSheet } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

export function WebBadge() {
  const scheme = useColorScheme();

  return (
    <ThemedView className="items-center gap-two p-five">
      <ThemedText type="code" themeColor="textSecondary" className="text-center">
        v{version}
      </ThemedText>
      <Image
        source={
          scheme === 'dark'
            ? require('@/assets/images/expo-badge-white.png')
            : require('@/assets/images/expo-badge.png')
        }
        style={styles.badgeImage}
      />
    </ThemedView>
  );
}

// expo-image の Image は className に未対応のため StyleSheet のまま残す
const styles = StyleSheet.create({
  badgeImage: {
    width: 123,
    aspectRatio: 123 / 24,
  },
});
