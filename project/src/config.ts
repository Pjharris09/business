export enum DataServiceType {
  http = 'HTTP',
  firebase = 'FIREBASE',
  backendless = 'BACKENDLESS',
}

export const Config = {
  apiUrl: 'assets/data/data.json',
  // export const apiUrl = 'https://xxxxxx.s3.amazonaws.com/xxxxx/data.json';

  mapApiKey: 'AIzaSyACdXwFV6SfAW4ET-uYdkq5zkoix6aFYK4',

  backendlessConfig: {
    appId: '1E6CE0298-C4F0-7122-FF02-F584FCE22D00',
    appKey: 'BC119FEF-98A7-4370-AF9F-D4C3B6994FA7',
  },

  DATA_SERVICE: DataServiceType.firebase,

  sender_id: '559173223789',
  oneSignalAppId: '70db2538-7056-4e56-8b45-2f240c6b5a5d',

  wordpressApiUrl: 'https://demo.titaniumtemplates.com/wordpress/?json=1',
  drupalApiUrl: 'https://demo.titaniumtemplates.com/drupal/rest/views/rest_api',

  firebase: {
    apiKey: 'AIzaSyB18ptwN9cGJgE_3x7G6uO9TaeErIJakYI',
    authDomain: 'hmg-electric.firebaseapp.com',
    databaseURL: 'https://hmg-electric.firebaseio.com',
    projectId: 'hmg-electric',
    storageBucket: 'hmg-electric.appspot.com',
    messagingSenderId: '741546606864',

  },
};
