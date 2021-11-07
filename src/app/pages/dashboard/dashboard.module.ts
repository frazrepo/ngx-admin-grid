import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { AgGridModule  } from 'ag-grid-angular';

import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    AgGridModule.withComponents([]),
    TableModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
