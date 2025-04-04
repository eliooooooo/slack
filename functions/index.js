const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialiser Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://slack-app-d30aa.firebaseio.com"
});

// Exemple de fonction pour obtenir un token d'authentification
exports.getAuthToken = functions.https.onRequest((req, res) => {
  // Générer un token personnalisé pour l'utilisateur
  const uid = "some-uid"; // Remplacez par l'UID de l'utilisateur
  admin.auth().createCustomToken(uid)
    .then((customToken) => {
      res.send({ token: customToken });
    })
    .catch((error) => {
      console.error("Error creating custom token:", error);
      res.status(500).send("Error creating custom token");
    });
});
