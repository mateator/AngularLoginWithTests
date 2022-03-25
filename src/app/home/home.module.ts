import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    MatAutocompleteModule
  ]
})
export class HomeModule { }
