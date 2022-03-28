import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TireSearchComponent } from './tire-search.component';

describe('TireSearchComponent', () => {
  let component: TireSearchComponent;
  let fixture: ComponentFixture<TireSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TireSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TireSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
