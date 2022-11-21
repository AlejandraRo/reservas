import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={
    name:'',
    ced:'',    
    dependencia:'',
    email : '',
    password:'',
    telefono:''
  }
  constructor(private authService:AuthService) { 

  }

  ngOnInit(): void {
  }

  signUp(){
    this.authService.signUp(this.user)
    .subscribe(
      res=>{
        console.log(res.token)
        localStorage.setItem('token',res.token)
      },
      err=>console.log(err)
    )
  }

}
