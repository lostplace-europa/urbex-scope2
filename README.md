# Urbex Scope Website
## Verwendung
- Lade den Inhalt auf GitHub Pages hoch.
- Setze Firestore-Regeln, z.B.:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /comments/{doc} {
      allow read, write: if request.auth != null;
    }
    match /reports/{doc} {
      allow read, write: if request.auth != null;
    }
  }
}
```