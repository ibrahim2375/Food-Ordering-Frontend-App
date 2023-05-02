import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserRegister } from 'src/app/shared/interfaces/UserRegister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reactiveForm!: FormGroup;
  returnUrl = '/';
  errorsList = {
    usernameRequired:'Name Cannot Be Empty',
    usernameMinLength:'Username must be at least 4 character',
    emailRequired:'Email Cannot Be Empty',
    vaildEmail:'Please Enter Vaild Email',
    addressRequired:'Address Cannot Be Empty',
    addressMinLength:'Address must be at least 10 character',
    passwordRequired:'Password Cannot Be Empty',
    passwordPattern:'Password must be at least 8 character include number,spcial,lower and capital.',
  }
  passwordPattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}';
  constructor(private userService: UserService,private activatedRoute:ActivatedRoute, private router:Router) { }
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null,[Validators.required,Validators.minLength(4)]),
      email: new FormControl(null,[Validators.required, Validators.email]),
      address: new FormControl(null,[Validators.required,Validators.minLength(10)]),
      password: new FormControl(null,[Validators.required,Validators.minLength(6),Validators.pattern(this.passwordPattern)]),
    })
  } 
  onSubmit() {
    if(this.reactiveForm.invalid) return;
    //new user data
    const newUser:UserRegister = {
        name : this.reactiveForm.get('name')?.value,
        email : this.reactiveForm.get('email')?.value,
        password : this.reactiveForm.get('password')?.value,
        address: this.reactiveForm.get('address')?.value,
    }
    this.userService.register(newUser).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    })
    //reset the form
    this.reactiveForm.reset();
  }

}
