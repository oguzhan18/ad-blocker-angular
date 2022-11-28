import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AdBlockerComponent } from './ad-blocker/ad-blocker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogsService } from './modal/dialogs.service';

@NgModule({
  declarations: [
    AppComponent,
    AdBlockerComponent, 
    ModalComponent
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
  entryComponents: [
    ModalComponent
  ], 
  exports: [ModalComponent], 
  providers: [DialogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
