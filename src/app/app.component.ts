import { Component, OnInit } from '@angular/core';
import { CountService } from './shared/services/count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
pageNum : number = 2






  // MatPaginator Inputs
  // length = 100;
  // pageSize = 10;
  // pageEvent 
  // pageSizeOptions: number[] = [5, 10, 25, 100];

  ngOnInit(): void {
       
  }
  title = 'pagination';
  
  constructor(private _countservice : CountService){}




  // onDecrease(){
  //    console.log("res");
     
  //   if(this.count >= 1){
  //   this._countservice.newSub$.next(this.count--)

  //   }
      
  // }

  // OnIncrease(){
  //   this._countservice.newDecSub$.next(this.count++)
    
  // }
}
