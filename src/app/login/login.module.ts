import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
