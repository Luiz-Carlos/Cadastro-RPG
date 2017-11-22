import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmailComponent } from './cadastro-email.component';

describe('CadastroEmailComponent', () => {
  let component: CadastroEmailComponent;
  let fixture: ComponentFixture<CadastroEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
