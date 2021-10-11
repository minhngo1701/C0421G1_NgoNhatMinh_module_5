import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeCreateComponent } from './employee/create/employee-create.component';
import { ContractCreateComponent } from './contract/contract-create.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import {HttpClientModule} from "@angular/common/http";
import {ListEmployeeComponent} from "./employee/list-employee/list-employee.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {Ng2OrderModule} from "ng2-order-pipe";
import {NgxPaginationModule} from "ngx-pagination";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateCustomerComponent,
    EmployeeCreateComponent,
    ContractCreateComponent,
    NavbarComponent,
    FooterComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    EditEmployeeComponent,
    ListEmployeeComponent,
    DeleteEmployeeComponent,
    DeleteCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
