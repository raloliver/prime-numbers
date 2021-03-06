import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StartSectionsComponent } from './components/sections/start-sections/start-sections.component';
import { NotificationsSectionsComponent } from './components/sections/notifications-sections/notifications-sections.component';
import { PrimeNumbersSectionsComponent } from './components/sections/prime-numbers-sections/prime-numbers-sections.component';
import { StoreModule } from '@ngrx/store';
import { reducer as calculationReducer } from './store/reducers/calculation.reducer';
import { TranslateModule, TranslateLoader, TranslateFakeLoader, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        StoreModule.forRoot({
          calculationReducer
        }),
        TranslateModule.forRoot()
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        StartSectionsComponent,
        NotificationsSectionsComponent,
        PrimeNumbersSectionsComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
