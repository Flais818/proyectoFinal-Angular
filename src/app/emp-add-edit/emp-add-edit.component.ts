import { Component, OnInit } from '@angular/core';
import {NgForm, FormsModule} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})

export class EmpAddEditComponent implements OnInit{

  constructor(private dialogRef: MatDialog) {}

  ngOnInit(): void {
  }

  login(form:NgForm) {

    const user = form.value.user
    const psw = form.value.password

    if(user != "admin" || psw != "root") {
      console.log("Usuario o pasword incorrectos!!")
    }
    else {
      console.log("Usuario admin")
    }
  }

  close () {
     let dialogRef = this.dialogRef;
     dialogRef.closeAll();
   } 

}


