import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/create/customer.component';
import { EmployeeCreateComponent } from './employee/create/employee-create.component';
import { ServiceCreateComponent } from './service/service-create.component';
import { ContractCreateComponent } from './contract/contract-create.component';
import { EmployeeListComponent } from './customer/list/employee-list/employee-list.component';
import { ListEmployeeComponent } from './customer/list-employee/list-employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    EmployeeCreateComponent,
    ServiceCreateComponent,
    ContractCreateComponent,
    EmployeeListComponent,
    ListEmployeeComponent,
    NavbarComponent,
    FooterComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
