import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

// Components
import { HomeComponent } from './components/home/home.component';
import { UploadComponent } from './components/upload/upload.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// Router
import { APP_ROUTING } from './routes';
// Services
import { UploadService } from './services/upload.service';
// Directive
import { NgDropZoneDirective } from './directives/ng-drop-zone.directive';
import { TestZoneDirective } from './directives/test-zone.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent,
    NavbarComponent,
    NgDropZoneDirective,
    TestZoneDirective
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    APP_ROUTING
  ],
  providers: [
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
