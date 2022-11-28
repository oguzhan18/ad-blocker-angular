import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter, Input, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CommonService } from '../common.service'; 

@Component({
  selector: 'app-ad-blocker',
  templateUrl: './ad-blocker.component.html',
  styleUrls: ['./ad-blocker.component.scss'],
})
export class AdBlockerComponent implements OnInit, OnDestroy {
  public result: any;
  isBlocked = true;
  states = {};
  sub: Subscription;
  @Input() showContent = false;
  @Output() blocker = new EventEmitter<any>();


  @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any>;
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  openDialogWithoutRef() {
    this.dialog.open(this.secondDialog);
  }
  closeDialogWithoutRef() {
    this.dialog.closeAll();
  }





  constructor(private _common: CommonService, private dialog: MatDialog,) {
    this.states['state1'] = 'shakestart';
    this.states['state2'] = 'shakestart';
  }

  ngOnInit() {
    if (document.getElementsByClassName('ads-section')[0].clientWidth === 0) {
      this.blocker.emit(true);
      this.isBlocked = true;
    } else {
      this.isBlocked = false;
      this.blocker.emit(false);
    }
    this.sub = this._common.shakeAdBlock.subscribe(value => {
      if (value) {
        this.shakeMe('state1');
      }
    });

    if (this.isBlocked == true) {
      this.openDialogWithoutRef();
    }

  }

  shakeMe(stateVar: string) {
    this.states[stateVar] = (this.states[stateVar] === 'shakestart' ? 'shakeend' : 'shakestart');
  }

  shakeEnd(stateVar: string, event) {
    this.states[stateVar] = 'shakeend';
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
