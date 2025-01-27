import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicaleDetailComponent } from './vehicale-detail.component';

describe('VehicaleDetailComponent', () => {
  let component: VehicaleDetailComponent;
  let fixture: ComponentFixture<VehicaleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicaleDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicaleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
