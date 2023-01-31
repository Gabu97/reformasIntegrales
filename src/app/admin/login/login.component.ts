import { UserService } from 'src/app/home/services/user.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
constructor(private UserService: UserService, private router: Router){
this.formLogin = new FormGroup({
  email: new FormControl(),
  password: new FormControl()
})
}

ngOnInit(): void {}

onSubmit(){

  this.UserService.login(this.formLogin.value)
  .then(response => {
    console.log(response);
    this.router.navigate(['/budgetsCreated'])
  })
  .catch(error => console.log(error));
}

}
