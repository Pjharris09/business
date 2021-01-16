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
    appId: '1:559173223789:web:bfe340ebfe33e882c6c664',
    appKey: 'AIzaSyCFkcKxD9DKXSeV3ukpmZFq6755EV06fLI',
  },

  DATA_SERVICE: DataServiceType.firebase,

  sender_id: '559173223789',
  oneSignalAppId: '70db2538-7056-4e56-8b45-2f240c6b5a5d',

  wordpressApiUrl: 'https://demo.titaniumtemplates.com/wordpress/?json=1',
  drupalApiUrl: 'https://demo.titaniumtemplates.com/drupal/rest/views/rest_api',

  firebase: {
    apiKey: 'AIzaSyCFkcKxD9DKXSeV3ukpmZFq6755EV06fLI',
    authDomain: 'business-directory-admin-de0a6.firebaseapp.com',
    databaseURL: 'https://business-directory-admin-de0a6-default-rtdb.firebaseio.com',
    projectId: 'business-directory-admin-de0a6',
    storageBucket: 'business-directory-admin-de0a6.appspot.com',
    messagingSenderId: '559173223789',

  },
};
