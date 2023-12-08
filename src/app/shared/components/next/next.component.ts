import { Component, Input, OnInit } from '@angular/core';
import { CountService } from '../../services/count.service';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent implements OnInit {
  @Input()  count !: number 
  constructor(private _countservice : CountService) { }

  ngOnInit(): void {
  }
}
