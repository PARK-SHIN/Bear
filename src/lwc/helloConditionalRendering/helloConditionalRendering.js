/**
 * Created by i2max-ShinPark on 2022-07-05.
 */

import { LightningElement ,api, wire, track} from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
   const columns = [
        { label: 'Label', fieldName: 'name' },
        { label: 'Website', fieldName: 'website', type: 'url' },
        { label: 'Phone', fieldName: 'phone', type: 'phone' },
        { label: 'Balance', fieldName: 'amount', type: 'currency' },
        { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
    ];


export default class HelloConditionalRendering extends LightningElement {
    isVisible = false

    handleClick(){
        this.isVisible = true
    }


    // Datatable
    @track columns = [{
                label: 'Account name',
                fieldName: 'Name',
                type: 'text',
                sortable: true
            },
            {
                label: 'Type',
                fieldName: 'Type',
                type: 'text',
                sortable: true
            },
            {
                label: 'Annual Revenue',
                fieldName: 'AnnualRevenue',
                type: 'Currency',
                sortable: true
            },
            {
                label: 'Phone',
                fieldName: 'Phone',
                type: 'phone',
                sortable: true
            },
            {
                label: 'Website',
                fieldName: 'Website',
                type: 'url',
                sortable: true
            },
            {
                label: 'Rating',
                fieldName: 'Rating',
                type: 'test',
                sortable: true
            }
        ];

        @track error;
        @track accList ;
        @wire(getAccountList)
        wiredAccounts({
            error,
            data
        }) {
            if (data) {
                this.accList = data;
            } else if (error) {
                this.error = error;
            }
        }


}