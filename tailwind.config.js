/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      // src/constants/theme.ts の Spacing と同じ値（px 固定）。
      // NativeWind はネイティブで 1rem = 14px として扱うため、p-4 などの標準値ではなくこちらを使う。
      spacing: {
        half: '2px',
        one: '4px',
        two: '8px',
        three: '16px',
        four: '24px',
        five: '32px',
        six: '64px',
      },
      borderRadius: {
        half: '2px',
        one: '4px',
        two: '8px',
        three: '16px',
        four: '24px',
        five: '32px',
        six: '64px',
      },
      maxWidth: {
        // MaxContentWidth
        content: '800px',
      },
    },
  },
  plugins: [],
};
