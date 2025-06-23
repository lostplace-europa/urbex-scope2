import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
document.getElementById('reportForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    lat: parseFloat(document.getElementById('lat').value),
    lng: parseFloat(document.getElementById('lng').value),
    created: Date.now()
  };
  await addDoc(collection(db, 'reports'), data);
  alert('Meldung gespeichert');
  e.target.reset();
});
