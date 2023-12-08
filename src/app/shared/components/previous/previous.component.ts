import { Component, Input, OnInit } from '@angular/core';
import { CountService } from '../../services/count.service';

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.scss']
})
export class PreviousComponent implements OnInit {
@Input() count : number = 0
@Input() pageNum!  :number 
    
  constructor(private _countservice : CountService) { }

  ngOnInit(): void {

 
  }

  

  

}
