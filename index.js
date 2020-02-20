let admin = require('firebase-admin');
const uuidv1 = require('uuid/v1');
const serviceAccount = require('./auth.json');

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
});
const v1options = {
    msecs: new Date().getTime(),
  };
let uid = uuidv1(v1options);

admin.auth().createCustomToken(uid)
.then((customToken)=>{
    console.log(customToken);  
})
.catch((error)=>{
    console.log('error', error);
})