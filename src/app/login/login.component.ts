import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userId!: string;
  password!: string;

  constructor(private router: Router) {}

  onSubmit() {
    // Assuming validation is done, navigate to the user-details page
    this.router.navigate(['/user-details']);
  }
}
