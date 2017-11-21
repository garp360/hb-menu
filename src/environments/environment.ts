// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBiEr5HPEEo_oWVfe2dn9YXi-3ibfhPW7Q",
    authDomain: "hb-conops.firebaseapp.com",
    databaseURL: "https://hb-conops.firebaseio.com",
    projectId: "hb-conops",
    storageBucket: "hb-conops.appspot.com",
    messagingSenderId: "244918788140"
  }
};
