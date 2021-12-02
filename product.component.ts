import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() descricaoProduto: String ="";

  @Output() addAoCarrinho: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  addProduct () {
    this.addAoCarrinho.emit()
    console.log('Entrou')
  }
}
