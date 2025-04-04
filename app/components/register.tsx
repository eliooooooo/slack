// src/components/Register.js
import { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Enregistrement réussi !');
    } catch (error) {
      alert('Erreur lors de l\'enregistrement : ' + error.message);
    }
  };

  return (
    <div>
      <h2>Enregistrement</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">S'enregistrer</button>
      </form>
    </div>
  );
};

export default Register;