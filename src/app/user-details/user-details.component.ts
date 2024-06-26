// // src/app/user-details/user-details.component.ts
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-user-details',
//   templateUrl: './user-details.component.html',
//   styleUrls: ['./user-details.component.css']
// })
// export class UserDetailsComponent {
//   userDetailsForm: FormGroup;
//   countries: string[] = ['India', 'Nepal', 'Japan'];

//   constructor(private fb: FormBuilder, private router: Router) {
//     this.userDetailsForm = this.fb.group({
//       name: ['', Validators.required],
//       address: ['', Validators.required],
//       country: ['', Validators.required],
//       gender: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.userDetailsForm.valid) {
//       console.log('Form submitted:', this.userDetailsForm.value);
//       this.router.navigate(['/login']);
//     }
//   }
// }


//new

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-user-details',
//   templateUrl: './user-details.component.html',
//   styleUrls: ['./user-details.component.css']
// })
// export class UserDetailsComponent {
//   userDetailsForm: FormGroup;
//   countries: string[] = ['India', 'Nepal', 'Japan'];

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private http: HttpClient
//   ) {
//     this.userDetailsForm = this.fb.group({
//       name: ['', Validators.required],
//       address: ['', Validators.required],
//       country: ['', Validators.required],
//       gender: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.userDetailsForm.valid) {
//       console.log('Form submitted:', this.userDetailsForm.value);

//       // Extracting values from the form
//       const { name, address, country, gender } = this.userDetailsForm.value;

//       // Placeholder values for old values
//       const oldUserName = 'oldUserName';
//       const oldParentName = 'oldParentName';
//       const oldDomainName = 'oldDomainName';
//       const oldCategoryName = 'oldCategoryName';

//       // Make the HTTP request
//       this.http.get('/user-details', {
//         params: {
//           user_name: name,
//           parent_name: address,
//           domain_name: country,
//           category_name: gender,
//           queried_user_name: oldUserName,
//           queried_parent_name: oldParentName,
//           queried_domain_name: oldDomainName,
//           queried_category_name: oldCategoryName
//         }
//       }).subscribe(
//         response => {
//           console.log(response);
//           this.router.navigate(['/login']);
//         },
//         error => {
//           console.error('Error fetching user details:', error);
//         }
//       );
//     }
//   }
// }


//new2

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient, HttpParams } from '@angular/common/http';

// @Component({
//   selector: 'app-user-details',
//   templateUrl: './user-details.component.html',
//   styleUrls: ['./user-details.component.css']
// })
// export class UserDetailsComponent {
//   userDetailsForm: FormGroup;
//   countries: string[] = ['India', 'Nepal', 'Japan'];

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private http: HttpClient
//   ) {
//     this.userDetailsForm = this.fb.group({
//       name: ['', Validators.required],
//       address: ['', Validators.required],
//       country: ['', Validators.required],
//       gender: ['', Validators.required]
//     });
//   }

// onSubmit() {
//   if (this.userDetailsForm.valid) {
//     console.log('Form submitted:', this.userDetailsForm.value);

//     const { name, address, country, gender } = this.userDetailsForm.value;
//     const oldUserName = 'oldUserName'; // Replace with actual old values
//     const oldParentName = 'oldParentName';
//     const oldDomainName = 'oldDomainName';
//     const oldCategoryName = 'oldCategoryName';

//     this.http.get('/user-details', {
//       params: {
//         user_name: name,
//         parent_name: address,
//         domain_name: country,
//         category_name: gender,
//         queried_user_name: oldUserName,
//         queried_parent_name: oldParentName,
//         queried_domain_name: oldDomainName,
//         queried_category_name: oldCategoryName
//       }
//     }).subscribe(
//       response => {
//         console.log(response);
//         this.router.navigate(['/login']);
//       },
//       error => {
//         console.error('Error fetching user details:', error);
//       }
//     );
//   }
// }
// }

//new3

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-user-details',
//   templateUrl: './user-details.component.html',
//   styleUrls: ['./user-details.component.css']
// })
// export class UserDetailsComponent {
//   userDetailsForm: FormGroup;
//   countries: string[] = ['India', 'Nepal', 'Japan'];
//   oldUserName = 'Riya';  // Replace with actual old values
//   oldParentName = 'Bhavya';
//   oldDomainName = 'Merchant';
//   oldCategoryName = 'Maths';

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private http: HttpClient
//   ) {
//     this.userDetailsForm = this.fb.group({
//       name: ['', Validators.required],
//       address: ['', Validators.required],
//       country: ['', Validators.required],
//       gender: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.userDetailsForm.valid) {
//       console.log('Form submitted:', this.userDetailsForm.value);

//       // Extracting values from the form
//       const { name, address, country, gender } = this.userDetailsForm.value;

//       // Placeholder values for old values
//       const queryParams = {
//         user_name: name,
//         parent_name: address,
//         domain_name: country,
//         category_name: gender,
//         queried_user_name: this.oldUserName,
//         queried_parent_name: this.oldParentName,
//         queried_domain_name: this.oldDomainName,
//         queried_category_name: this.oldCategoryName
//       };

//       // Make the HTTP request
//       this.http.get('/user-details', { params: queryParams }).subscribe(
//         response => {
//           console.log('Response:', response);
//           this.router.navigate(['/login']);
//         },
//         error => {
//           console.error('Error fetching user details:', error);
//         }
//       );
//     }
//   }
// }

//old

// src/app/user-details/user-details.component.ts
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
