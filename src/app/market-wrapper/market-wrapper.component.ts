import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-market-wrapper',
  templateUrl: './market-wrapper.component.html',
  styleUrls: ['./market-wrapper.component.css']
})
export class MarketWrapperComponent implements OnInit {

  valorParaFilho: number = 0;

  constructor() {

   }

   comunica(valor: number) 
   {
     this.valorParaFilho = localStorage.length+1
     console.log(this.valorParaFilho, "esse")
   }

  ngOnInit(): void {
  }
 
}
