import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AddressListComponent } from './address-list.component';
import { AddressDetailComponent } from './address-detail.component';
import { AddressService } from './address.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        AddressListComponent,
        AddressDetailComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'addresses', component: AddressListComponent },
            { path: 'addresses/:id', component: AddressDetailComponent }               
        ])
    ],
    providers: [
        AddressService,
    ]
})
export class AddressModule { }
