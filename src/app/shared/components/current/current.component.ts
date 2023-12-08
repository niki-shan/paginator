import { Component, Input, OnInit } from '@angular/core';
import { CountService } from '../../services/count.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
 @Input()  count !: number
  constructor(private _countservice : CountService) { }

  ngOnInit(): void {
    
  }

}
