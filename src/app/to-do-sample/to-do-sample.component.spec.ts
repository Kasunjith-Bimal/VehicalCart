import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoSampleComponent } from './to-do-sample.component';

describe('ToDoSampleComponent', () => {
  let component: ToDoSampleComponent;
  let fixture: ComponentFixture<ToDoSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
