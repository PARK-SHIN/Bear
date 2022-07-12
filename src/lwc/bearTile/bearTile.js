/**
 * Created by i2max-ShinPark on 2022-07-12.
 */

import { LightningElement, api } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
export default class BearTile extends LightningElement {
    // bear로 장식된 @api 속성 을 추가했습니다.
    // 이렇게 하면 bear 속성이 모든 상위 구성 요소에 노출 됩니다.
	@api bear;
    	appResources = {
    		bearSilhouette: `${ursusResources}/standing-bear-silhouette.png`,
    	};


    handleOpenRecordClick() {
        const selectEvent = new CustomEvent('bearview', {
            detail: this.bear.Id
        });
        this.dispatchEvent(selectEvent);
    }

}