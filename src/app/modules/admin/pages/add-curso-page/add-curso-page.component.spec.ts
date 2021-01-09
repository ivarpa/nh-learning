import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCursoPageComponent } from './add-curso-page.component';

describe('AddCursoPageComponent', () => {
  let component: AddCursoPageComponent;
  let fixture: ComponentFixture<AddCursoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCursoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCursoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
