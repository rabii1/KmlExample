import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapContentComponentComponent } from './map-content-component.component';

describe('MapContentComponentComponent', () => {
  let component: MapContentComponentComponent;
  let fixture: ComponentFixture<MapContentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapContentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
