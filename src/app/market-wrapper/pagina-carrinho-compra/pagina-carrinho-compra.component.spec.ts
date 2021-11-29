import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCarrinhoCompraComponent } from './pagina-carrinho-compra.component';

describe('PaginaCarrinhoCompraComponent', () => {
  let component: PaginaCarrinhoCompraComponent;
  let fixture: ComponentFixture<PaginaCarrinhoCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaCarrinhoCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCarrinhoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
