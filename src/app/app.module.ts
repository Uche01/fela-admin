import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routerConfig';

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from '../environments/environment';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HomeComponent } from './components/home/home.component';
import { AdminAddComponent } from './components/admin-add/admin-add.component';
import { ToastrModule } from 'ngx-toastr';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule} from '@angular/forms'
import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
import { AppStatisticsComponent } from './components/app-statistics/app-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminAddComponent,
    AppStatisticsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    TooltipModule.forRoot(),
    NgxEditorModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
