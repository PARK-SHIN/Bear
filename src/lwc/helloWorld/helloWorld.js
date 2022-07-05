/**
 * Created by i2max-ShinPark on 2022-07-04.
 */

import { LightningElement , track } from 'lwc';

export default class HelloWorld extends LightningElement {
    age=27
    title = "aura"
    details = {
        company : "i2max",
        fullname : "Shin Park"
     }

     changeHandler(event){
         this.title = event.target.value
     }

    @track address = {
         city: 'Seoul',
         postcode : 3000,
         country : 'Korea'
     }

    @track
    userList = ["park", "shin", "sunny"]

    num1 = 10; num2 = 20;
    // array와 사칙연산은 html에서 바로 쓸 수 없기 때문에 getter를 만들어서 보낸다.
    get firstUser(){
        return this.userList[0]
    }

    get multiply (){
        return this.num1 * this.num2
    }

     trackHandler(event){
         this.address.city = event.target.value
         this.userList[0] = event.target.value
     }


}
