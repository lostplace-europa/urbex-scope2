import { auth } from './firebase.js';
import { signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert('Erfolgreich eingeloggt');
    document.getElementById('logoutBtn').style.display = 'block';
  } catch (err) {
    alert('Login fehlgeschlagen: ' + err.message);
  }
});
document.getElementById('logoutBtn').addEventListener('click', async () => {
  await signOut(auth);
  alert('Ausgeloggt');
  document.getElementById('logoutBtn').style.display = 'none';
});
