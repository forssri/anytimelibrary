import app from 'firebase/app';
import 'firebase/auth';
import AppConfig from '../../config/firebaseConfig';

class Firebase {
  constructor() {
    app.initializeApp(AppConfig);
    this.auth = app.auth();
  }

  // Auth methods implementation
  /// Sign up with email and password
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  /// Sign in with email and password
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  /// Sign out
  doSignOut = () => this.auth.signOut();
  /// Sign in with Google account
  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(new app.auth.GoogleAuthProvider());
}

export default Firebase;
