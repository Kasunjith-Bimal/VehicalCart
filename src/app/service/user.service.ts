import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { toSignal } from "@angular/core/rxjs-interop";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {
   }

  public members = signal<User[]>([]);

  loadMembers(){
    this.http.get<User[]>(this.userUrl).subscribe({
          next: (users) => {
            this.members.set(users);
            //this.setSelectedVehicale(vehicles[0])
          },
          error: (err) => console.error('Failed to load vehicles:', err),
        });
  }

}
