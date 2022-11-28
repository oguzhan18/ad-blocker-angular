import { Component, OnInit, Input, Inject, ViewChild, TemplateRef } from '@angular/core'; 
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogsService } from './dialogs.service';

 @Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
 
  public result: any;
  public title: string;
  public message: string;

  constructor(public dialogRef: MatDialogRef<ModalComponent>,private dialog: MatDialog, public dialogsService: DialogsService) {

  }
   ngOnInit(): void { }



   public openDialog() {
    this.dialogsService
      .confirm('Confirm Dialog', 'Are you sure you want to do this?')
      .subscribe(res => this.result = res);
  }





  @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any>;
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  openDialogWithoutRef() {
    this.dialog.open(this.secondDialog);
  }
}