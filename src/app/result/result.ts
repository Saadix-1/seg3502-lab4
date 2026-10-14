import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-result',
  imports: [RouterLink],
  templateUrl: './result.html'
})
export class Result {
  user = inject(UserDataService).user;
}
