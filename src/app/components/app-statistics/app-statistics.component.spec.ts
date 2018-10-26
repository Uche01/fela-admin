import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStatisticsComponent } from './app-statistics.component';

describe('AppStatisticsComponent', () => {
  let component: AppStatisticsComponent;
  let fixture: ComponentFixture<AppStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
