import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TireCreationComponent } from './tire-creation.component';

describe('TireCreationComponent', () => {
  let component: TireCreationComponent;
  let fixture: ComponentFixture<TireCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TireCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TireCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
