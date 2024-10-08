import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
email = '';
password = '';

constructor(private http : HttpClient){}

login(){
  this.http.post<any>("http://localhost:3000/auth/login").subscribe(
    (response)=>{
      console.log(response);
    },
    (error)=>{
      console.log(error);
    }
  )
}

}
