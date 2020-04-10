import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsCreatePage } from './news-create.page';

describe('NewsCreatePage', () => {
  let component: NewsCreatePage;
  let fixture: ComponentFixture<NewsCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
