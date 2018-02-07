import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {InventoryComponent} from "./inventory/inventory.component"
import {CheckoutComponent} from './checkout/checkout.component';



import {MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatSidenavModule,
<<<<<<< Updated upstream
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule} from "@angular/material"
        
=======
        MatListModule} from "@angular/material";
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component'
>>>>>>> Stashed changes
const appRoutes:Routes=[
  {path:'', redirectTo:'inventory', pathMatch:'full'},
  {path:'inventory', component:InventoryComponent},
  {path:'checkout', component:CheckoutComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    CheckoutComponent,
    TableComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
