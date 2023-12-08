import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  newSub$ :Subject<number> = new Subject<number>()
   newDecSub$ :Subject<number> = new Subject<number>()

  constructor() { }
}
