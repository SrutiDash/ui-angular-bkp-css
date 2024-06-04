import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserSearchComponent } from './all-user-search.component';

describe('AllUserSearchComponent', () => {
  let component: AllUserSearchComponent;
  let fixture: ComponentFixture<AllUserSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllUserSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllUserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
