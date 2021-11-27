import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {

  productDescription: String = " Teste"
  teste: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  adicionaAoCarrinho(num:any) {
    console.log("num")
  }

}
