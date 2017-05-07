import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewComComponent } from './my-new-com.component';

describe('MyNewComComponent', () => {
  let component: MyNewComComponent;
  let fixture: ComponentFixture<MyNewComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
