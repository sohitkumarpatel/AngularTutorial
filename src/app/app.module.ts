import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserModule, FormsModule,NgbPaginationModule, NgbAlertModule ],
  declarations: [ AppComponent, HelloComponent,FooterComponent,HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
