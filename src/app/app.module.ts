import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocietyDashboardComponent } from './society-dashboard/society-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { DataService } from './services/data.service';
import {environment} from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';

@NgModule({
  declarations: [
    AppComponent,
    SocietyDashboardComponent,
    HomeComponent,
    CodeOfConductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ModalModule.forRoot(),
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library : FaIconLibrary){
    library.addIcons(faBars,faTimes);
  }
 }
  