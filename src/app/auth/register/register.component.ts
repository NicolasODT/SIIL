import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ])
  ]
})
export class RegisterComponent {
  registerForm: FormGroup;
  showPassword = false;
  profileImageUrl: string | ArrayBuffer | null = 'chemin/vers/image/par/defaut.jpg';



  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      Name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  onRegister(): void {
    // Logic for registration here
  }

  OnProfileImageChange(event: Event): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }



}
