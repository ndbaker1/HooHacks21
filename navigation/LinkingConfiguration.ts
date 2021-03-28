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
                  GettingStartedScreen: 'start',
                },
              },
            },
          },
          App: {
            screens: {
              TabTwo: {
                screens: {
                  TabTwoScreen: 'two',
                },
              },
              TabThree: {
                screens: {
                  TabThreeScreen: 'two',
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
