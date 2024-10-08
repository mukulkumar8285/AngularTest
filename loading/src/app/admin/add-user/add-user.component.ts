import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, NgxSkeletonLoaderModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'] // Corrected to 'styleUrls'
})
export class AddUserComponent {
  users: any[] = []; // Array to hold user data
  loading: boolean = false; // Loading state

  constructor(private http: HttpClient) {}

  search() {
    this.loading = true; 
    const apiurl = "https://jsonplaceholder.typicode.com/todos";
    this.http.get(apiurl).subscribe(
      (data: any) => {
        this.users = data; 
        this.loading = false; 
      },
      error => {
        console.error(error);
        this.loading = false; 
      }
    );
  }
}
