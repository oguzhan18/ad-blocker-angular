import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AdBlockerComponent } from './ad-blocker/ad-blocker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'; 

@NgModule({
  declarations: [
    AppComponent,
    AdBlockerComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatDialogModule,
    MatButtonModule,
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
