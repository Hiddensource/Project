import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
@NgModule({
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

import { LoginComponent } from './login/login.component';
import {AppComponent} from './app.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AppComponent }
];
