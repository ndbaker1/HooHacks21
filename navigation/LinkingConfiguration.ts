import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Landing: {
            screens: {
              GettingStarted: {
                screens: {
                  GettingStartedScreen: 'GettingStarted',
                },
              },
            },
          },
          App: {
            screens: {
              Home: {
                screens: {
                  HomeScreen: 'Home',
                },
              },
              Scan: {
                screens: {
                  ScanScreen: 'Scan',
                },
              },
              Recipes: {
                screens: {
                  RecipesScreen: 'Recipes',
                },
              },
            },
          }
        },
      },
      NotFound: '*',
    },
  },
};
