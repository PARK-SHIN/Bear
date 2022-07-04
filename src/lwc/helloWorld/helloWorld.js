/**
 * Created by i2max-ShinPark on 2022-07-04.
 */

import { LightningElement } from 'lwc';

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
}