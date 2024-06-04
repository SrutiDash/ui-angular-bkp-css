import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { userId, password } = this.loginForm.value;
      this.loginService.login(userId, password).subscribe(
        message => {
          if (message === 'Success') {
            this.router.navigate(['/user-details']);
          } else {
            this.errorMessage = message;
          }
        },
        error => {
          this.errorMessage = 'Enter Correct UserName/Password';
        }
      );
    }
  }
}
