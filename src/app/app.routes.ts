import { Routes } from '@angular/router';
import { ContactForm } from './contact-form/contact-form';
import { Result } from './result/result';

export const routes: Routes = [
  { path: 'form', component: ContactForm },
  { path: 'result', component: Result },
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: '**', component: ContactForm }
];
