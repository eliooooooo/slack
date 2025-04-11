import { auth } from '../../firebase';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { SignInPopUp } from '../pop-up/signIn';
import { PopUpLayout } from '../pop-up/layout';

export function Welcome() {

  const provider = new GoogleAuthProvider();

  function checkIdToken(idToken) {
    const functionUrl = "https://us-central1-slack-app-d30aa.cloudfunctions.net/checkIdToken";
  
    fetch(functionUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        console.log("Réponse de la fonction:", data);
      })
      .catch((error) => {
        console.error("Erreur lors de l'appel de la fonction:", error);
      });
  }

  function signIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // L'utilisateur est connecté.
        const user = result.user;

        // Récupérer le token d'identification (ID token).
        user.getIdToken().then((idToken) => {
          // Vous pouvez maintenant utiliser idToken pour appeler votre fonction.
          console.log("ID Token:", idToken);
          // Appeler la fonction avec le token.
          checkIdToken(idToken);
        });
      })
      .catch((error) => {
        // Gérer les erreurs.
        console.error("Erreur de connexion:", error);
      });
  }

  return (
    <main className="flex flex-col gap-10 items-center justify-center pt-16 pb-4 text-center">
      <h1>Welcome on this project</h1>
      <p>The project is still under developpement, please come back later ! </p>
      <PopUpLayout>
        <p>Test</p>
      </PopUpLayout>
      <SignInPopUp />
      <button
        onClick={() => {
          signIn();
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </main>
  );
}