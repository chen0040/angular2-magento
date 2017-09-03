import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { IAddress } from './address';
import { AddressService } from './address.service';

@Component({
    templateUrl: 'app/addresses/address-detail.component.html'
})
export class AddressDetailComponent implements OnInit {
    pageTitle: string = "Address Detail";
    address: IAddress;
    errorMessage: string;

    constructor(private _route: ActivatedRoute, private _router: Router, private _addressService: AddressService) {

    }

    ngOnInit(): void {
        let id = this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
        this._addressService.getAddressById(id)
            .subscribe(address => {
                this.address = address;
                this.pageTitle += ': ' + this.address.addressId;
            },
            error => this.errorMessage = <any>error);
        
    }

    onBack(): void {
        this._router.navigate(['/addresses']);
    }
}