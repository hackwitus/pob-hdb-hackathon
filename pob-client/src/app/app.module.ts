import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {InventoryComponent} from "./inventory/inventory.component"
import {CheckoutComponent} from './checkout/checkout.component';

import {MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatSidenavModule,
<<<<<<< HEAD
        MatListModule,
        MatFormFieldModule,
        MatInputModule} from "@angular/material"
=======
        MatListModule } from "@angular/material";
>>>>>>> 7ea0205ddf57659b3df471d92e3396e898caec97
const appRoutes:Routes=[
  {path:'', redirectTo:'inventory', pathMatch:'full'},
  {path:'inventory', component:InventoryComponent},
  {path:'checkout', component:CheckoutComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
