import { Component, OnInit } from '@angular/core';
import { produtos } from 'src/app/banco-produtos';


@Component({
  selector: 'app-pagina-carrinho-compra',
  templateUrl: './pagina-carrinho-compra.component.html',
  styleUrls: ['./pagina-carrinho-compra.component.css']
})
export class PaginaCarrinhoCompraComponent implements OnInit {
  
  
  arrayProd: Array<string | number | null | object> = [];
  arrayProdRender: any = [];
  valorTotal: number = 0;
  valorBR = '';
  

  produtos = produtos;

  constructor() { }
  
  renderizaLista () {
    for(let i = 0; i <= localStorage.length-1 ; i+=1) {
      let id = localStorage.key(i)
      this.arrayProd.push(id)
    }

    this.arrayProd.forEach((prod) => {
      produtos.forEach((novosProdutos) => {
        (novosProdutos.id == prod) ? this.arrayProdRender.push(novosProdutos) : false
      })
    })

    }
  ngOnInit(): void {
    this.renderizaLista()
  }
  
  excluirProduto(id:string) {
    localStorage.removeItem(id)
    window.location.reload()
  }

  addAoTotal(valor:string){
    this.valorTotal += parseFloat(valor)
    this.mudaFormatoValor(this.valorTotal)
  }

  rmvAoTotal(valor:string){
    this.valorTotal -= parseFloat(valor)
    this.mudaFormatoValor(this.valorTotal)
  }

  mudaFormatoValor(valor:number) {
    this.valorBR = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  }

}
