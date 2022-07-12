/**
 * Created by i2max-ShinPark on 2022-07-12.
 */
import { publish, MessageContext } from 'lightning/messageService';
import BEAR_LIST_UPDATE_MESSAGE from '@salesforce/messageChannel/BearListUpdate__c';
import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, wire } from 'lwc';
//import ursusResources from '@salesforce/resourceUrl/ursus_park';
/** BearController.getAllBears() Apex method */
//import getAllBears from '@salesforce/apex/BearController.getAllBears';

import searchBears from '@salesforce/apex/BearController.searchBears';

export default class BearList extends NavigationMixin(LightningElement) {
//	bears;
//	error;
//	appResources = {
//		bearSilhouette: `${ursusResources}/standing-bear-silhouette.png`,
//	};
//
//	// apex 연결?
//	connectedCallback() {
//		this.loadBears();
//	}
//
//	// apex로 가져온 Bears
//	loadBears() {
//		getAllBears()
//			.then(result => {
//				this.bears = result;
//			})
//			.catch(error => {
//				this.error = error;
//			});
//	}

// ---------------------------------------------
// bearList.html에서 <template bear> 에서 <template bear.data>로
// 싹다 바꿔주었기 때문에 js도 @wire를 사용해서 간단하게 작성할 수 있다.

//@wire(getAllBears) bears;
//	appResources = {
//		bearSilhouette: `${ursusResources}/img/standing-bear-silhouette.png`,
//	};

// ------------------------------------------------

    searchTerm = '';
	bears;
    @wire(MessageContext) messageContext;
    @wire(searchBears, {searchTerm: '$searchTerm'})
    loadBears(result) {
      this.bears = result;
      if (result.data) {
        const message = {
          bears: result.data
        };
        publish(this.messageContext, BEAR_LIST_UPDATE_MESSAGE, message);
      }
    }

	handleSearchTermChange(event) {
		// Debouncing this method: do not update the reactive property as
		// long as this function is being called within a delay of 300 ms.
		// This is to avoid a very large number of Apex method calls.
		// 이 메서드를 디버깅하는 중: 반응 속성을 다음으로 업데이트하지 않음
        // 이 함수가 300ms의 지연 시간 내에 호출되는 한.
        // 이는 Apex 메서드 호출이 매우 많이 발생하는 것을 방지하기 위한 것입니다.

		window.clearTimeout(this.delayTimeout);
		const searchTerm = event.target.value;
		// eslint-disable-next-line @lwc/lwc/no-async-operation
		this.delayTimeout = setTimeout(() => {
			this.searchTerm = searchTerm;
		}, 300);
	}
	get hasResults() {
		return (this.bears.data.length > 0);
	}

    handleBearView(event) {
        // Get bear record id from bearview event
        const bearId = event.detail;
        // Navigate to bear record page
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: bearId,
                objectApiName: 'Bear__c',
                actionName: 'view',
            },
        });
    }
}