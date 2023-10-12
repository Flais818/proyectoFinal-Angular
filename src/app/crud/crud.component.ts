import { Component, OnInit } from '@angular/core';
import {MatRadioModule, MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent  {

  arrUrl: string [];
  fuente:string = 'https://th.bing.com/th/id/R.601f7e7c6d02fe0cdb268c0c3e53ed12?rik=YzrbvN72xPeUNQ&pid=ImgRaw&r=0';
  nombre:string = 'postre';


  constructor(private router: Router) {
    this.arrUrl = []
  }

  ngOnInit(): void {
    //this.arrUrl["./Postres/cupcake.png"];
  }

  agregar() {

    let nombre = prompt('Introduce el nuevo nombre');
    let nuevoNombre = nombre?.toString();
    this.nombre = nuevoNombre ?? 'Fallo';

    let link = prompt('Introduce el nuevo link');
    let nuevaFuente = link?.toString();
    // Uso de coalescencia en caso de que la variable sea nula
    this.fuente = nuevaFuente ?? 'Fallo';

  }

  
  eliminar() {

    alert('Seguro que quieres eliminarlo');

    this.fuente = '';
    
  }

  //Para modificar se pide al usuario que ingrese el nuevo nombre y link
  modificar() {
    
    let nombre = prompt('Introduce el nombre');
    let nuevoNombre = nombre?.toString();
    this.nombre = nuevoNombre ?? 'Fallo';

    let link = prompt('Introduce el link');
    let nuevaFuente = link?.toString();
    // Uso de coalescencia en caso de que la variable sea nula
    this.fuente = nuevaFuente ?? 'Fallo';

  }

  regresarAHome() {
    this.router.navigate(['/']);
  }
}
