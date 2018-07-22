import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoEditarComponent } from './movimentacao-editar.component';

describe('MovimentacaoEditarComponent', () => {
  let component: MovimentacaoEditarComponent;
  let fixture: ComponentFixture<MovimentacaoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentacaoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
