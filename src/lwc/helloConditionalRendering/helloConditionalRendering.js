/**
 * Created by i2max-ShinPark on 2022-07-05.
 */

import { LightningElement ,api, wire, track} from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false
    name

    handleClick(){
        if(isVisible == true){
            this.isVisible = false
        } else{
            this.isVisible = true
        }
    }

    changeHandler(event){
        this.name = event.target.value
    }

    get helloMethod(){
        return this.name === 'hello'
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
            if (data){
                this.accList = data;
            } else if (error) {
                this.error = error;
            }
        }

    getSelectedRec() {
          var selectedRecords =  this.template.querySelector("lightning-datatable").getSelectedRows();
          if(selectedRecords.length > 0){
              console.log('selectedRecords are ', selectedRecords);

              let ids = '';
              selectedRecords.forEach(currentItem => {
                  ids = ids + ',' + currentItem.Id;
                  console.log(currentItem.Id);
//                  this.template.querySelector('lightning-datable').id(currentItem.Id).disabled
              });
              this.selectedIds = ids.replace(/^,/, '');
              this.lstSelectedRecords = selectedRecords;
              alert(this.selectedIds);

               this.template.querySelector("lightning-datatable").getSelectedRows().disabled
          }
        }


}