import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WikiResultsComponent } from './wiki-results/wiki-results.component';
import { HistoryComponent } from './history/history.component';
import { WikiSectionComponent } from './wiki-section/wiki-section.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { firebaseConfig } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AuthGuard} from './login/auth.guard';
import { PreferencesComponent } from './preferences/preferences.component';

const routes:Routes = [
  //{ path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate:[AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'history', component: HistoryComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    /*
  { path: 'search', component: SearchComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent }, */
];

@NgModule({
  declarations: [
    AppComponent,
    WikiResultsComponent,
    HistoryComponent,
    WikiSectionComponent,
    DashboardComponent,
    LoginComponent,
    PreferencesComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

