/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#F0F0F0',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    border: '#E0E0E0',
    cardBackground: '#F8F9FA',
    deepGrayText: '#3E4C59',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    border: '#2D2F30',
    cardBackground: '#1F2123',
    deepGrayText: '#B0B6BC',
  },
  common: {
    primary: '#FD8700',
    primaryAccent: '#FF8902',
    primaryShadowColor: 'rgba(253, 135, 0, 0.6)',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#808080',
    lightGray: '#A3A3A3',
    yellow: '#FFD700',
    shadowColor: '#000000',
    cardShadowColor: 'rgba(0, 0, 0, 0.2)',
    textColor: '#000000',
    deepGrayTextColor: '#4A4A4A',
    borderRadius: 12,
    padding: 16,
  },
};
