import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import { IntermediumService } from 'src/app/services/intermedium.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
 mensaje="";
 bandera=false;
 user={
    name:'',
    ced:'',   
    roles:[''], 
    dependencia:'',
    email : '',
    password:'',
    telefono:''
  }
  dependencias: any = [];
  roles: any = [];
  constructor(public authService:AuthService,
    
    private router:Router,
    public intmService:IntermediumService,
    ) { 

  }

  ngOnInit(): void {
    this.getDependencias();
    this.getRoles();
  }

  onFacultad(e: any) {
    //console.log(e.target.value);
    this.user.dependencia = e.target.value;
}

  getDependencias() {
    
    
    this.authService.getDependencias().subscribe(
      res => {
        
        for (let i of Object.values(res)) {
          this.dependencias.push(i);
        }
        console.log(this.dependencias);
        
      },
      err => console.log(err)
    );
  };

  getRoles(){
    console.log("soy un rol")
    this.authService.getRoles().subscribe(
      res => {
        for(let i of Object.values(res)){
          this.roles.push(i);
        }
       
      },
      err=>console.log(err)
    )
  };

  onRole(e: any) {
    console.log(e.target.value);
    this.user.roles=[e.target.value];
                };
  signUp(){
    if(this.user.email.indexOf("@udenar.edu.co")!==-1)
    {
      this.authService.signUp(this.user)    
      .subscribe(
        res=>{        
          // console.log(res.token)
          localStorage.setItem('token',res.token)
          localStorage.setItem('roles',res.roles)
          localStorage.setItem('dependencia',res.dependencia)
          this.router.navigate(['/reservas']);
        },
        err=>console.log(err)
      )
    }
    else(
      this.bandera=true,
      this.mensaje="Email inválido, debe ingresar un correo con el dominio @udenar.edu.co"
      
    )
    
  }

}
