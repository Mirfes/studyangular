import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aqui iria un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red}"]
})
export class EmpleadoComponent implements OnInit {

  nombre="Daniel";

  apellido="Diaz";

  edad=17;

  empresa="Televideo S.A.S";

  //getEdad(){

   // return this.edad;
  //}

llamaEmpresa(value:string){

}

  constructor() { }

  ngOnInit(): void {
  }

}
