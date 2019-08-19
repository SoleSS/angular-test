import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonpageComponent } from './lessonpage.component';

describe('LessonpageComponent', () => {
  let component: LessonpageComponent;
  let fixture: ComponentFixture<LessonpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
