import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html'
})
export class ContactForm {
  private builder = inject(FormBuilder);
  private router = inject(Router);
  private userData = inject(UserDataService);

  // 10 chiffres, 1er et 4e chiffres différents de 0
  private phonePattern = /^[1-9]\d{2}[1-9]\d{6}$/;

  userForm = this.builder.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.pattern(this.phonePattern)], // facultatif : '' est accepté
    email: ['', Validators.email]
  });

  get firstName() { return this.userForm.controls.firstName; }
  get lastName() { return this.userForm.controls.lastName; }
  get phone() { return this.userForm.controls.phone; }
  get email() { return this.userForm.controls.email; }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    this.userData.user = this.userForm.getRawValue();
    this.router.navigate(['/result']).then(() => {});
  }
}
