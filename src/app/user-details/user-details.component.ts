import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  name: string='';
  address: string='';
  country: string='';
  gender: string='';
  countries: string[] = ['India', 'Nepal', 'Japan']; // Replace with actual country names

  constructor(private router: Router) {}

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', {
      name: this.name,
      address: this.address,
      country: this.country,
      gender: this.gender,
    });
    this.router.navigate(['/login']);
  }
}
