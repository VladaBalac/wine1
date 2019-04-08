import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing/app-routing.module';
import { ServisService } from './wine/service/servis.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { PaginationComponent } from './wine/pagination/pagination.component';
import { TableComponent } from './wine/table/table.component';
import { WineFormComponent } from './wine/wine-form/wine-form.component';
import { AboutComponent } from './wine/about/about.component';
import { SearchComponent } from './wine/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    WineListComponent,
    PaginationComponent,
    TableComponent,
    WineFormComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
