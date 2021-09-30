import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { ServiceCreateComponent } from './service-create/service-create.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CasestudyComponent,
    CustomerComponent,
    EmployeeCreateComponent,
    ServiceCreateComponent,
    ContractCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
