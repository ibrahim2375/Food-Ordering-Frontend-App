import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reactiveForm!: FormGroup;
  returnUrl = '/foods';
  constructor(private userService: UserService,private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required]),
    })
    // this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl
  }
  onSubmit() {
  if(this.reactiveForm.invalid) return;

  this.userService.login({email:this.reactiveForm.get('email')?.value,password:this.reactiveForm.get('password')?.value}).subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
  });
  }
}
