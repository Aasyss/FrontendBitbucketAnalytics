import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import AuthllizerModule from '@authllizer/ngx';
import {BackendAdapter} from '@authllizer/core';
import {environment} from '../environments/environment';
import BitbucketOAuth2 from 'authllizer-bitbucket-oauth2';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

// let baseUrl;
// baseUrl = environment.backendUrl;
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    AuthllizerModule.forRoot({
      adapter: BackendAdapter.extend({
        baseUrl: `${environment.backendUrl}/rest-auth/`
      }),
      // interceptList: [environment.backendUrl],
      providers: {
        bitbucket: BitbucketOAuth2.extend({
          clientId: '2PrASg2PF9UhJBWnkx'
        }),
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
