import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  descricaoProduto: string | number = "1234";
  linkImg: string = "assets/img/cart2.png";

  @Input() nomeDoProduto: string = "";
  @Input() precoDoProduto: string ="";
  @Input() linkDaImagem: string ="";
  @Input() idProduto: string =" ";
  @Output() paraOPai: EventEmitter<number> = new EventEmitter;
  @Output() idProdAdicionado: EventEmitter<string> = new EventEmitter;


  constructor() { }

  ngOnInit(): void {
  }
  enviaAoPai (id:string) {
    
    this.paraOPai.emit(1)
    this.idProdAdicionado.emit(id)

  }

  
}
