import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AuthorisedSideNavService } from '../services/authorised-side-nav.service';

@Component({
  selector: 'app-authorised-side-nav',
  templateUrl: './authorised-side-nav.component.html',
  styleUrls: ['./authorised-side-nav.component.css']
})
export class AuthorisedSideNavComponent implements OnInit {



    constructor( public sideNavService: AuthorisedSideNavService,
        private router: Router,
        private tokenStorage: TokenStorageService
    ) {
       
    }
  ngOnInit(): void {
  }

    get isFramer() {
      const currentUser :User = this.tokenStorage.getUser();
        return currentUser && currentUser.role.indexOf(Role.Framer)!=-1;
    }

    get isCustomer() {
      const currentUser :User = this.tokenStorage.getUser();
      return currentUser && currentUser.role.indexOf(Role.Customer)!=-1;
    }

   

}
