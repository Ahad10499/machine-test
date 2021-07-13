import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeatilsComponent } from './user-deatils.component';

describe('UserDeatilsComponent', () => {
  let component: UserDeatilsComponent;
  let fixture: ComponentFixture<UserDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
