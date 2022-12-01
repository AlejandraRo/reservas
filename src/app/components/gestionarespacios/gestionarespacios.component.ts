import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-gestionarespacios',
  templateUrl: './gestionarespacios.component.html',
  styleUrls: ['./gestionarespacios.component.css']
})
export class GestionarespaciosComponent implements OnInit {
  tipos:any=[];
  mensaje='';
  bandera=false;
  espacio={
    name:'',
    tipo:''
  };
  
  constructor(public authService:AuthService) { }



  ngOnInit(): void {
    this.getTipos();
  }

  getTipos(){
    this.authService.getTiposEspFis().subscribe(
      res=>{
        for(let i of Object.values(res)){
          this.tipos.push(i);
        }
      },
      err=>console.log(err)
    )
  };
  onTipo(e:any){
    this.espacio.tipo=e.target.value;
  };
  crearEspacio(){
  this.authService.createEspace(this.espacio)
  .subscribe(res=>{
    this.bandera=true;
     this.mensaje="Espacio registrado con éxito";
  },
  err=>console.log(err))
  }
  

}
