import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-form',
//   standalone: true,
//   imports: [FormsModule , ReactiveFormsModule],
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent  {
// }
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
  // Template-Driven Form Example 
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//


  // user = {
  //   name: '',
  //   email: '',
  // };

  // onSubmit() {
  //   console.log(this.user);  
  // }
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

  // Reactive Form Example

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

 
  // userForm: FormGroup;
  // constructor() {
  //   this.userForm = new FormGroup({
  //     name: new FormControl('', [Validators.required , Validators.maxLength(2)]),
  //     email: new FormControl('', [Validators.required, Validators.email])
  //   });
  // }

  // onSubmit() {
  //   console.log(this.userForm.value);  // Outputs the form data
  // }

 
  
  @Component({
    selector: 'app-form',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule , CommonModule],
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
  })
  export class FormComponent implements OnInit, OnChanges, OnDestroy {
  
    @Input() title: string = '';  // Input decorator for binding data
  
    // Reactive Form Setup
    userForm: FormGroup;
  
    constructor() {
      console.log("Constructor is called");
  
      // Initializing the form with form controls and validators
      this.userForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email])
      });
    }
  
    ngOnInit(): void {
      console.log("ngOnInit is called");
    }
  
    ngOnChanges(element: SimpleChanges): void {
      // console.log("ngOnChanges is called", changes);
      console.log("ngOnChanges is called", element);
      // Handle the changes here if needed
      if (element['title']) {
        console.log('Title changed:', element['title'].currentValue);
      }
    }
  
    ngOnDestroy(): void {
      console.log("ngOnDestroy is called");
    }
  
    // Form submission method
    onSubmit(): void {
      if (this.userForm.valid) {
        console.log("Form submitted successfully!", this.userForm.value);
      } else {
        console.log("Form is invalid");
      }
    }
  }
  