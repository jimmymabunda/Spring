import { Component, OnInit } from '@angular/core';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private hardcodedautenticationservice: HardcodedauthenticationService) { }

  ngOnInit() {
    this.hardcodedautenticationservice.logout();
  }

}
