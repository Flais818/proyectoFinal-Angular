import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {NgForm, FormsModule} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})

export class EmpAddEditComponent{

  user:string='';
  password:string='';
  
  constructor(private dialogRef: MatDialog, private router: Router) {}

  ngOnInit(): void {
  }

  
  login() {
    
    user:String; 
    password:String;
    if(this.user != 'admin' && this.password != 'root') {
      alert('Usuario o password incorrecto')
    }
    else {
      //alert("Ingresaste como admin")
    }
    this.dialogRef.closeAll();
    
    this.router.navigate(['/crud']);
  }

  close () {
     let dialogRef = this.dialogRef;
     dialogRef.closeAll();
  } 

}


