import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogsService } from './modal/dialogs.service';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAdBlocked: any;
  isActive: boolean; 
  isBlocked(event: any) {
    this.isAdBlocked = event;
  }

  languages = window.navigator.languages;

  constructor(private dialog: MatDialog, private dialogsService: DialogsService, ) {
 
  }
  ngOnInit(): void { } 

}
