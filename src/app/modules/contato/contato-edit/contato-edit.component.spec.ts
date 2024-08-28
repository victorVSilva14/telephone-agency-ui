import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoEditComponent } from './contato-edit.component';

describe('ContatoEditComponent', () => {
  let component: ContatoEditComponent;
  let fixture: ComponentFixture<ContatoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
