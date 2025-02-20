import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedSignalSampleComponent } from './linked-signal-sample.component';

describe('LinkedSignalSampleComponent', () => {
  let component: LinkedSignalSampleComponent;
  let fixture: ComponentFixture<LinkedSignalSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedSignalSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedSignalSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
