import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSafetyBlogComponent } from './food-safety-blog.component';

describe('FoodSafetyBlogComponent', () => {
  let component: FoodSafetyBlogComponent;
  let fixture: ComponentFixture<FoodSafetyBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodSafetyBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodSafetyBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
