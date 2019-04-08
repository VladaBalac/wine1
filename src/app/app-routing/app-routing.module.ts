import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WineListComponent } from '../wine/wine-list/wine-list.component';
import { TableComponent } from '../wine/table/table.component';
import { WineFormComponent } from '../wine/wine-form/wine-form.component';
import { AboutComponent } from '../wine/about/about.component';

export const route : Routes = [
	{path:'wine', component: WineListComponent},
	{path:'wine/add', component: WineFormComponent},
	{path:'wine/:id', component: WineFormComponent},
	{path:'about', component: AboutComponent},
	{path:'', redirectTo:'/wine', pathMatch:'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],

  exports: [
  	RouterModule
  ],

  declarations: []
})
export class AppRoutingModule { }
