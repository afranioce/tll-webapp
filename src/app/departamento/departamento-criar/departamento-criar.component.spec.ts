import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoCriarComponent } from './departamento-criar.component';

describe('DepartamentoCriarComponent', () => {
  let component: DepartamentoCriarComponent;
  let fixture: ComponentFixture<DepartamentoCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentoCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
