import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { signInWithEmailAndPassword } from  '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private auth: Auth) {}
  /*
  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
*/

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  logout() {
    return signOut(this.auth);
  }
}
