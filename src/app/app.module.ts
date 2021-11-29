import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketWrapperComponent } from './market-wrapper/market-wrapper.component';
import { HeaderComponent } from './market-wrapper/header/header.component';
import { MainProductComponent } from './market-wrapper/main-product/main-product.component';
import { FooterComponent } from './market-wrapper/footer/footer.component';
import { SearchProductsComponent } from './market-wrapper/header/search-products/search-products.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './market-wrapper/main-product/product/product.component';
import { Product2Component } from './market-wrapper/main-product/product2/product2.component';
import { CarrinhoCompraComponent } from './market-wrapper/main-product/carrinho-compra/carrinho-compra.component';
import { PaginaCarrinhoCompraComponent } from './market-wrapper/pagina-carrinho-compra/pagina-carrinho-compra.component';
import { ProdutoCarrinhoComponent } from './market-wrapper/pagina-carrinho-compra/produto-carrinho/produto-carrinho.component';
import { ObrigadoComponent } from './obrigado/obrigado.component';

const appRoutes: Routes = [
  { path: 'home', component: MarketWrapperComponent},
  { path: 'carrinho-compra', component: PaginaCarrinhoCompraComponent},
  { path: 'obrigado', component: ObrigadoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MarketWrapperComponent,
    HeaderComponent,
    MainProductComponent,
    FooterComponent,
    SearchProductsComponent,
    ProductComponent,
    Product2Component,
    CarrinhoCompraComponent,
    PaginaCarrinhoCompraComponent,
    ProdutoCarrinhoComponent,
    ObrigadoComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
