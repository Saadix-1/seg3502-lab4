import { Injectable } from '@angular/core';

export interface UserData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class UserDataService {
  user: UserData | null = null;
}
