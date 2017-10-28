import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleWholeComponent } from './article-whole.component';

describe('ArticleWholeComponent', () => {
  let component: ArticleWholeComponent;
  let fixture: ComponentFixture<ArticleWholeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleWholeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleWholeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
