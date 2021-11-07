import {ColDef} from 'ag-grid-community';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

    // Mock data and config for ag-grid
    columnDefs: ColDef[] = [
        { field: 'make', sortable: true, filter: true },
        { field: 'model', sortable: true, filter: true },
        { field: 'price', sortable: true, filter: true }
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

    // Mock data for primeng
    data = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
}

