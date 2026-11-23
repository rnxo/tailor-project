import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

type ErrorViewProps = {
  text: string;
  className?: string;
}

export default function ErrorView({ text, className }: ErrorViewProps) {
  return (
    <ThemedView className={`flex-1 items-center justify-center ${className}`}>
      <ThemedText>{text}</ThemedText>
    </ThemedView>
  )
}