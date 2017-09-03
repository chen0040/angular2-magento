import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { AddressPage } from './address-page';
import { IAddress } from './address';

@Injectable()
export class AddressService {

    private _addressUrl = 'http://localhost:3001/api/addresses.json';

    constructor(private _http : Http) {

    }

    getAddresses(pageIndex: number, pageSize: number) : Observable<AddressPage> {
        return this._http.get(this._addressUrl)
            .map((response: Response) => <AddressPage> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAddressById(addressId: string) : Observable<IAddress> {
        return this._http.get(this._addressUrl + '/' + addressId)
        .map((response: Response) => <IAddress>response.json())
        .do(data => console.log('Address: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}