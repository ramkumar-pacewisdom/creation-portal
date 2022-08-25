import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrgUsersListComponent } from './org-users-list.component';

xdescribe('OrgUserListComponent', () => {
  let component: OrgUsersListComponent;
  let fixture: ComponentFixture<OrgUsersListComponent>;



  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgUsersListComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(OrgUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
