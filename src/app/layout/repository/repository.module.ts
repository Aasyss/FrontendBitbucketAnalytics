import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryRoutingModule } from './repository-routing.module';
import {RepositoryComponent} from './repository.component';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [RepositoryComponent],
  imports: [
    CommonModule,
    RepositoryRoutingModule,
    TranslateModule
  ]
})
export class RepositoryModule { }
