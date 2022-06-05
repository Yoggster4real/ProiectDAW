import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isAdmin: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService) { 
      this.checkRole();
    }

  ngOnInit(): void {
  }

  admin() {
    this.router.navigate(['/admin']);
  }

  logout() {
    this.authService.logout();
  }

  checkRole(){
    var role = localStorage.getItem('Role');
    if(role == "Admin") {
      this.isAdmin = true;
    }
    else this.isAdmin = false;
  }
}
