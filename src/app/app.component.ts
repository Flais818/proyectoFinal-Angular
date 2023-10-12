import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModel } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoFinal';

  constructor(private _dialog: MatDialog) {}

openAddEditEmpForm() {
  this._dialog.open(EmpAddEditComponent);
}

}
