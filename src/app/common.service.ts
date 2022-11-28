import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  shakeAdBlock: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor() { }
}
