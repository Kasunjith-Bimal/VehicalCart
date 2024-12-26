import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicaleShellComponent } from './vehicale-shell.component';

describe('VehicaleShellComponent', () => {
  let component: VehicaleShellComponent;
  let fixture: ComponentFixture<VehicaleShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicaleShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicaleShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
