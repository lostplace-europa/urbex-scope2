import { db } from './firebase.js';
import { collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
const commentForm = document.getElementById('commentForm');
const commentsContainer = document.getElementById('commentsContainer');
commentForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = document.getElementById('commentText').value;
  await addDoc(collection(db, 'comments'), { text, created: Date.now() });
  commentForm.reset();
});
onSnapshot(collection(db, 'comments'), (snapshot) => {
  commentsContainer.innerHTML = '';
  snapshot.forEach(doc => {
    const div = document.createElement('div');
    div.textContent = doc.data().text;
    commentsContainer.appendChild(div);
  });
});
