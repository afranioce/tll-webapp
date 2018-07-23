import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioDetalheComponent } from './funcionario-detalhe.component';

describe('FuncionarioDetalheComponent', () => {
  let component: FuncionarioDetalheComponent;
  let fixture: ComponentFixture<FuncionarioDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
