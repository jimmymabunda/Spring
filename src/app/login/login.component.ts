import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = 'jimmy';
password = '';
errorMessage = 'Invaild Credentials';
invaildLogin = false;
  constructor(private router: Router, private hardcodedautenticationservice: HardcodedauthenticationService) { }

  ngOnInit() {
  }
handleLogin() {
// console.log(this.username);
// if (this.username === 'jimmy' && this.password === 'jimmy') {
  if (this.hardcodedautenticationservice.authenticate(this.username, this.password)) {
      this.invaildLogin = false;

// redircet
      this.router.navigate(['welcome', this.username]);

} else {
  this.invaildLogin = true;
}
}
}
