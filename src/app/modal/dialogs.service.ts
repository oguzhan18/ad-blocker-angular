import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs/Observable';
import { ModalComponent } from './modal.component';

@Injectable()
export class DialogsService {
    constructor(private dialog: MatDialog) { }
    public confirm(title: string, message: string): Observable<boolean> {
        let dialogRef: MatDialogRef<ModalComponent>;
        dialogRef = this.dialog.open(ModalComponent);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    }
}