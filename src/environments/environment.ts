// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'https://fe3-angular.firebaseio.com',
  apiKey: 'AIzaSyCtaGNCSCq_nzBHIzwiZ5nMbNdafLVpKDc',
  signUpUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
  loginUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
  authRedirectUrl: '/cars',
  firebase: {
    apiKey: 'AIzaSyCtaGNCSCq_nzBHIzwiZ5nMbNdafLVpKDc',
    authDomain: 'fe3-angular.firebaseapp.com',
    databaseURL: 'https://fe3-angular.firebaseio.com',
    projectId: 'fe3-angular',
    storageBucket: 'fe3-angular.appspot.com',
    messagingSenderId: '357061079249',
    appId: '1:357061079249:web:f38bd663dd0aada18f55f0'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
