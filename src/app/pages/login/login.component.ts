import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reactiveForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required]),
    })
  }
  onSubmit() {
  if(this.reactiveForm.invalid) return;
  alert(`
  Email: ${this.reactiveForm.get('email')?.value} 
  Pass: ${this.reactiveForm.get('password')?.value} 
  `)

  }
}
