import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoShortDetailComponent } from './curso-short-detail.component';

describe('CursoShortDetailComponent', () => {
  let component: CursoShortDetailComponent;
  let fixture: ComponentFixture<CursoShortDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoShortDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoShortDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
