import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitting = false;
  errorMessage: string | null = null;


  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isSubmitting = true;
      const { usuario, senha } = this.loginForm.value;

      this.authService.authenticate(usuario, senha).subscribe(isAuthenticated => {
        this.isSubmitting = false;

        if (isAuthenticated) {
          // this.router.navigate(['/contato']);
          console.log('teste')
        } else {
          this.errorMessage = 'Usuário ou senha incorretos.';
        }
      });
    }
  }

}
