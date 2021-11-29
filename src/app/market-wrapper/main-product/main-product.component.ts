import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { produtos } from 'src/app/banco-produtos';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {

produtos = produtos
@Output() passaParaCima: EventEmitter<number> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  salvaNoStorage (idProduto:string){
    localStorage.setItem(`${idProduto}`, `${idProduto}`)
    console.log(localStorage, "987")
    
  }

  addCarrinho (valor: number) {
    console.log(valor)
    this.passaParaCima.emit(valor)
  }
  idProdAdicionado (idProd:string) {
    this.salvaNoStorage(idProd)
    console.log(idProd)
  }

}
