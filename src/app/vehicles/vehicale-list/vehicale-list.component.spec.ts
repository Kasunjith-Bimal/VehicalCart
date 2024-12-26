import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicaleListComponent } from './vehicale-list.component';

describe('VehicaleListComponent', () => {
  let component: VehicaleListComponent;
  let fixture: ComponentFixture<VehicaleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicaleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
