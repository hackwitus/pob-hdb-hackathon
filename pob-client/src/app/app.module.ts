import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {InventoryComponent} from "./inventory/inventory.component"
import {CheckoutComponent} from './checkout/checkout.component';

const appRoutes:Routes=[
  {path:'', redirectTo:'inventory'},
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
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
