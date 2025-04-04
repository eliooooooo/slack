const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors'); 

// Initialiser Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://slack-app-d30aa.firebaseio.com"
});

const corsHandler = cors({ origin: true });

// Fonction Cloud Function pour vérifier le token d'authentification Firebase
exports.checkIdToken = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    const idToken = req.headers.authorization?.split('Bearer ')[1];

    if (!idToken) {
      return res.status(401).send('Unauthorized');
    }

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      const uid = decodedToken.uid;
      // L'utilisateur est authentifié, vous pouvez utiliser l'UID (uid)
      // pour accéder à ses données ou effectuer des actions en son nom.
      res.send(`Hello, user ${uid}!`);
    } catch (error) {
      console.error('Error while verifying Firebase ID token:', error);
      res.status(403).send('Unauthorized');
    }
  });
});