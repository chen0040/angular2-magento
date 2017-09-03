import { Component, OnInit } from '@angular/core';

import { AddressPage } from './address-page';
import { AddressService } from './address.service';

@Component({
    templateUrl: 'app/addresses/address-list.component.html'
})
export class AddressListComponent implements OnInit {

    page: AddressPage = null;
    pageTitle: string = 'Address List';
    errorMessage: string;
    pageSize: number = 10;
    pageIndex: number = 0;

    constructor(private _addressService : AddressService) {

    }

    ngOnInit(): void {
        this.refreshPage();
    }

    refreshPage(): void {
        this._addressService.getAddresses(this.pageIndex, this.pageSize).subscribe(page => {
            this.page = page;
        } ,
        error => this.errorMessage = <any>error);
    }

    nextPage(): void {
        if(this.page != null) {
            if(this.page.numberOfElements == this.pageSize){
                this.pageIndex++;
                this.refreshPage();
            } else {
                alert('Reaching end of data pages!');
            }
        }
    }

    prevPage(): void {
        if(this.pageIndex > 0) {
            this.pageIndex--;
            this.refreshPage();
        }
    }

    setPageSize(pageSize: number): void {
        var changed : boolean = this.pageSize != pageSize;
        this.pageSize = pageSize;
        if(changed) {
            this.refreshPage();
        }
    }

    

}