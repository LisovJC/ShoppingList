import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageWithListComponent } from './page-with-list/page-with-list.component';
import { ListShoppingComponent } from './list-shopping/list-shopping.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [						
    AppComponent,
      PageWithListComponent,
      ListShoppingComponent,
      ModalWindowComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
