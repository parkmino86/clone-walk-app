# Welcome to your Expo app 👋
<img src="https://github.com/user-attachments/assets/8223ed51-e8e9-478a-a3a2-7ecb82491b45" alt="Welcome Banner" width="375"/>
<img src="https://github.com/user-attachments/assets/b0a85983-ed7e-4f8b-928f-48d533cb20a5" alt="Welcome Banner" width="375"/>

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Project Structure
```
CLONE-WALK-APP
├── .expo
├── android
├── app
│   ├── (tabs)
│   │   ├── home
│   │   │   └── index.tsx
│   │   ├── benefits
│   │   │   └── index.tsx
│   │   ├── giftshop
│   │   │   └── index.tsx
│   │   ├── health
│   │   │   └── index.tsx
│   │   └── news
│   │       ├── index.tsx
│   │       ├── _layout.tsx
│   │       └── +not-found.tsx
├── assets
├── components
│   ├── __tests__
│   ├── ui
│   │   ├── background
│   │   ├── buttons
│   │   │   ├── RewardButton.tsx
│   │   │   └── StepRewardButton.tsx
│   │   ├── effects
│   │   │   └── StepRewardEffect.tsx
│   │   ├── icons
│   │   │   ├── IconSymbol.ios.tsx
│   │   │   └── IconSymbol.tsx
│   │   ├── text
│   │   │   ├── AvailablePointsText.tsx
│   │   │   ├── StepCountText.tsx
│   │   │   └── ThemedText.tsx
│   │   ├── view
│   │   │   └── ThemedView.tsx
│   │   └── HapticTab.tsx
├── constants
│   └── Colors.ts
├── context
│   └── PointsContext.tsx
├── dist
├── features
│   ├── benefits
│   ├── giftshop
│   ├── health
│   └── home
│       ├── daily-check
│       │   └── DailyCheckView.tsx
│       ├── earning-points
│       │   ├── EarningPointsCardItem.tsx
│       │   └── EarningPointsView.tsx
│       ├── earning-shortcuts
│       │   ├── EarningShortcutsCardItem.tsx
│       │   └── EarningShortcutsView.tsx
│       ├── health-shortcuts
│       │   ├── HealthShortcutsCardItem.tsx
│       │   └── HealthShortcutsView.tsx
│       ├── step-counter
│       │   └── StepCounterView.tsx
│       └── step-reward
│           ├── StepRewardListView.tsx
│           ├── HomeHeaderView.tsx
│           └── useHomeState.ts
├── hooks
│   ├── color
│   │   ├── useColorScheme.ts
│   │   ├── useColorScheme.web.ts
│   │   └── useThemeColor.ts
│   └── healthKit
│       └── useFetchStepCount.ts
...
```

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
