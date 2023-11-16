import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOverviewByTestComponent } from './component-overview-by-test.component';

describe('ComponentOverviewByTestComponent', () => {
  let component: ComponentOverviewByTestComponent;
  let fixture: ComponentFixture<ComponentOverviewByTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentOverviewByTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentOverviewByTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
