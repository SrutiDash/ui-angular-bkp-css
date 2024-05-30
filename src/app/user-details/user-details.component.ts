import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  userDetailsForm: FormGroup;
  countries: string[] = ['India', 'Nepal', 'Japan'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.userDetailsForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userDetailsForm.valid) {
      console.log('Form submitted:', this.userDetailsForm.value);
      this.router.navigate(['/login']);
    }
  }
}
