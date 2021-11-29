import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-produto-carrinho',
  templateUrl: './produto-carrinho.component.html',
  styleUrls: ['./produto-carrinho.component.css']
})
export class ProdutoCarrinhoComponent implements OnInit {
  
  @Input() nomeDoProduto: string = "";
  @Input() precoDoProduto: string ="";
  @Input() linkDaImagem: string ="";
  @Input() idProduto: string = "";

  @Output() excluirProd: EventEmitter<string> = new EventEmitter
  @Output() addAoTotal: EventEmitter<string> = new EventEmitter
  @Output() rmvAoTotal: EventEmitter<string> = new EventEmitter


  constructor() { }

  ngOnInit(): void {
  }

  excluirItem() {
    this.excluirProd.emit(this.idProduto)
    console.log(this.idProduto)
  }

  selecionado(checado:boolean, id: string ) {
    console.log(checado,id)
    if(checado) {
      console.log("vdd")
      this.addAoTotal.emit(this.precoDoProduto)
    }
    else {
      console.log("falso")
      this.rmvAoTotal.emit(this.precoDoProduto)
    }
    
  }

}
