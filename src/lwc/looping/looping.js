/**
 * Created by i2max-ShinPark on 2022-07-06.
 */

import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["Ford", "Audi", "Maruti", "Hyundai", "Merecedes"]

    ceoList = [
        {
            id:1,
            company:"Google",
            name:"Sundar Pichai"
        },
        {
            id:2,
            company:"Apple Inc.",
            name:"Tim cook"
        },
        {
            id:3,
            company:"Facebook",
            name:"Sns"
        },
        {
            id:4,
            company:"i2max",
            name:"Dev2"
        }
    ]
}