import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeListContainerComponent } from './bike-list-container.component';

describe('BikeListContainerComponent', () => {
  let component: BikeListContainerComponent;
  let fixture: ComponentFixture<BikeListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeListContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
