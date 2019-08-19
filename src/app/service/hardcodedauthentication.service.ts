import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthenticationService {

constructor() { }

authenticate(username, password) {
  console.log('before ' + this.isUserLoggedIn());
  if (username === 'jimmy' && password === 'jimmy') {
    sessionStorage.setItem('authenticaterUser', username);
    console.log('after ' + this.isUserLoggedIn());
    return true;
  } else {
    return false;
  }
}

isUserLoggedIn() {
const user = sessionStorage.getItem('authenticaterUser');
return !(user === null);
}
logout() {
  sessionStorage.removeItem('authenticaterUser');
}
}
