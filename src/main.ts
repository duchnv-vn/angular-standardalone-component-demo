import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { InMemoryDataService } from './app/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
        dataEncapsulation: false,
      })
    ),
  ],
}).catch((err) => console.error(err));
