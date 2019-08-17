import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
  }
handleLogin() {
// console.log(this.username);
if (this.username === 'jimmy' && this.password === 'jimmy') {
  this.invaildLogin = false;

// redircet
  this.router.navigate(['welcome',this.username]);

} else {
  this.invaildLogin = true;
}
}
}
